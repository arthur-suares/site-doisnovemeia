'use client';

import { useState } from 'react';

export default function FormNovaPostagem() {
    const [title, setTitle] = useState('');
    const [imagem, setImagem] = useState<File | null>(null);
    const [mensagem, setMensagem] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!imagem || !title) {
            setMensagem('Preencha todos os campos');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('imagem', imagem);

        const res = await fetch('/api/postagens', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            setMensagem('Postagem enviada com sucesso!');
            setTitle('');
            setImagem(null);
        } else {
            const error = await res.json();
            setMensagem(error.error || 'Erro ao enviar');
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label className="font-bold">
                Nova Postagem
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>

            <div className="flex flex-col gap-2">
                <label className="inline-block bg-purple-brandPurle hover:bg-green-greenHover text-white font-semibold py-2 px-4 rounded cursor-pointer transition duration-500">
                    📁 Selecionar imagem
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImagem(e.target.files?.[0] || null)}
                        className="hidden"
                    />
                </label>

                {imagem && (
                    <span className="text-sm text-gray-700 truncate max-w-xs">
                        Arquivo selecionado: <strong>{imagem.name}</strong>
                    </span>
                )}
            </div>
            
            <button 
                className="bg-purple-brandPurle font-semibold text-white rounded py-2 hover:bg-green-greenHover transition duration-500"
                type="submit">
                Enviar
            </button>
            
            {mensagem && <p>{mensagem}</p>}
        </form>
    );
}
