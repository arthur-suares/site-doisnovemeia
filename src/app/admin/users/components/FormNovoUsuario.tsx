'use client';

import { POST } from '@/app/api/users/route';
import React, { useState } from 'react';

export default function FormNovoUsuario({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const novoUsuario = { name, email, password };

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
      });

      if (response.ok) {
        setMensagem('Usuário cadastrado com sucesso!');
        setName('');
        setEmail('');
        setPassword('');
        onSuccess();
      }
      else {
        const data = await response.json();
        setMensagem(`Erro: ${data.error || 'Algo deu errado'}`);
      }
    }
    catch (error) {
      setMensagem('Erro ao tentar cadastrar usuário');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </div>
      <div>
        <label className="block font-semibold">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </div>
      <div>
        <label className="block font-semibold">Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-green-brandGreen text-black font-semibold px-4 py-2 rounded hover:bg-green-greenHover"
        onSubmit={() => {
          location.reload();
        }}
      >
        Cadastrar
      </button>
      {mensagem && <p className="mt-2 text-sm">{mensagem}</p>}
    </form>
  );
}