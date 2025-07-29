'use client';

import { useState } from 'react';
import { PuffLoader } from 'react-spinners';

// Renomeado para ChangePasswordPage para clareza
export default function ChangePasswordPage() {
  // 1. Estados atualizados para os campos de senha
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Estados de feedback
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); // Estado para mensagem de sucesso
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // 2. Validação no frontend antes de chamar a API
    if (newPassword !== confirmPassword) {
      setError('A nova senha e a confirmação não são iguais.');
      return;
    }

    setLoading(true);

    // 3. Chamada para a API de alterar senha
    const response = await fetch('/api/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    setLoading(false);

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message || 'Senha alterada com sucesso!');
      // Limpa os campos após o sucesso
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setError(data.error || 'Falha ao alterar a senha.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* 4. Título e campos atualizados no JSX */}
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Alterar Senha</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha Atual</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nova Senha</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Nova Senha</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mensagens de feedback */}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          {message && <p className="text-green-600 text-sm text-center">{message}</p>}

          <button
            type="submit"
            className="w-full bg-purple-brandPurle text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200" // Você pode querer uma cor diferente aqui
            disabled={loading}
          >
            {loading ? <PuffLoader color="#fff" size={27} /> : 'Alterar Senha'}
          </button>
        </form>
      </div>
    </div>
  );
}