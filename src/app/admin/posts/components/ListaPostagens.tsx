'use client';

import { useEffect, useState } from 'react';
import Modal from './Modal';
import { Pencil, Trash2 } from 'lucide-react'; // ícones

interface Postagem {
  id: number;
  title: string;
}

export default function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [postagemSelecionada, setPostagemSelecionada] = useState<Postagem | null>(null);
  const [modalEditarAberta, setModalEditarAberta] = useState(false);
  const [modalExcluirAberta, setModalExcluirAberta] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');

  useEffect(() => {
    async function carregarPostagens() {
      const res = await fetch('/api/postagens');
      const data = await res.json();
      setPostagens(data);
    }

    carregarPostagens();
  }, []);

  const abrirModalEditar = (postagem: Postagem) => {
    setPostagemSelecionada(postagem);
    setNovoTitulo(postagem.title);
    setModalEditarAberta(true);
  };

  const abrirModalExcluir = (postagem: Postagem) => {
    setPostagemSelecionada(postagem);
    setModalExcluirAberta(true);
  };

  const atualizarTitulo = async () => {
    if (!postagemSelecionada) return;
    await fetch(`/api/postagens/${postagemSelecionada.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: novoTitulo }),
    });
    setModalEditarAberta(false);
    location.reload(); // ou refaça o fetch
  };

  const excluirPostagem = async () => {
    if (!postagemSelecionada) return;
    await fetch(`/api/postagens/${postagemSelecionada.id}`, {
      method: 'DELETE',
    });
    setModalExcluirAberta(false);
    location.reload();
  };

  return (
    <div className="grid gap-4">
      {postagens.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow flex justify-between items-center">
          <span>{post.title}</span>
          <div className="flex gap-2">
            <button
              onClick={() => abrirModalEditar(post)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-1 rounded flex items-center gap-1 transition duration-500"
            >
              <Pencil size={16} /> Editar
            </button>
            <button
              onClick={() => abrirModalExcluir(post)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded flex items-center gap-1 transition duration-500"
            >
              <Trash2 size={16} /> Excluir
            </button>
          </div>
        </div>
      ))}

      {/* Modal Editar */}
      <Modal isOpen={modalEditarAberta} onClose={() => setModalEditarAberta(false)}>
        <h2 className="text-lg font-semibold mb-2">Editar Título</h2>
        <input
          type="text"
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <h2 className="text-lg font-semibold mb-2">Editar Descrição</h2>
        <input
          type="text"
          value={novaDescricao}
          onChange={(e) => setNovaDescricao(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <button
          onClick={atualizarTitulo}
          className="bg-green-brandGreen hover:bg-green-greenHover text-black font-semibold px-4 py-2 rounded transition duration-500"
        >
          Salvar
        </button>
      </Modal>

      {/* Modal Excluir */}
      <Modal isOpen={modalExcluirAberta} onClose={() => setModalExcluirAberta(false)}>
        <p className="text-lg mb-4">Tem certeza que deseja excluir essa postagem?</p>
        <button
          onClick={excluirPostagem}
          className="bg-red-500 hover:bg-red-600 font-semibold transition duration-500 text-white px-4 py-2 rounded"
        >
          Sim, excluir
        </button>
      </Modal>
    </div>
  );
}
