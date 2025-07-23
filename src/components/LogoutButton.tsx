// src/components/LogoutButton.tsx

'use client'; // 👈 Essencial para indicar que este é um Componente de Cliente

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PuffLoader } from 'react-spinners';

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    
    // Chama a nossa API de logout
    await fetch('/api/auth/logout', { method: 'POST' });

    // Após deslogar no backend, redireciona o usuário para a página de login
    router.push('/login');
    // Uma alternativa é router.refresh() para forçar a re-renderização da página atual,
    // o que acionaria o redirect no servidor, mas o push é mais direto.
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-red-400"
    >
      {loading ? <PuffLoader color="#fff" size={22} /> : 'Sair (Logout)'}
    </button>
  );
}