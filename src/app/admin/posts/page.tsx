// app/postagens/page.tsx
'use client';

import { useState } from 'react';
import FormNovaPostagem from './components/FormNovaPostagem';
import Modal from './components/Modal';
import ListaPostagens from './components/ListaPostagens';

export default function PostagensPage() {
  const [modalAberta, setModalAberta] = useState(false);

  return (
    <main className="p-6">
      {/* Barra horizontal */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold">Postagens</h1>
        <button
          onClick={() => setModalAberta(true)}
          className="bg-[#A1FD03] hover:bg-[#85CC02] text-black font-semibold py-2 px-4 rounded transition duration-300"
        >
          Nova Postagem
        </button>
      </div>

      {/* Modal com o formulário */}
      <Modal isOpen={modalAberta} onClose={() => setModalAberta(false)}>
        <FormNovaPostagem />
      </Modal>

      {/* Listagem das postagens */}
      <ListaPostagens />
    </main>
  );
}
