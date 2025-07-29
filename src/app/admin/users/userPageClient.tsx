'use client';

import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import FormNovoUsuario from './components/FormNovoUsuario';
import { Pencil, Trash2, User } from 'lucide-react'; // ícones

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [mensagem, setMensagem] = useState('');
  const [newName, setNewName ] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  async function fetchUsers() {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleEdit() 
  {
    if(!selectedUser) return;

    //Necessário para montar dinamicamente o json que vai ser enviado para não sobrescrever campos que não foram informados
    const updatedData: { name?: string; email?: string; password?: string } = {};

    if (newName.trim() !== '') {
      updatedData.name = newName.trim();
    }

    if (newEmail.trim() !== '') {
      updatedData.email = newEmail.trim();
    }

    if (newPassword.trim() !== '') {
      updatedData.password = newPassword.trim();
    }

    await fetch(`/api/users/${selectedUser.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedData),
    })

    setShowEditModal(false);
    location.reload();
  }

  async function handleDelete() {
    if (!selectedUser) return;

    try {
      const res = await fetch(`/api/users/${selectedUser.id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMensagem('Usuário excluído com sucesso!');
        setShowDeleteModal(false);
        location.reload();
        fetchUsers();
      } else {
        const data = await res.json();
        setMensagem(`Erro: ${data.error}`);
      }
    } catch {
      setMensagem('Erro ao excluir usuário');
    }
  }

  return (
    <main className="p-6">
      {/* Barra superior */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold">Usuários</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-[#A1FD03] hover:bg-[#85CC02] text-black font-semibold py-2 px-4 rounded transition duration-300"
        >
          Novo Usuário
        </button>
      </div>

      {mensagem && <p className="mb-4 text-sm text-green-700">{mensagem}</p>}

      {/* Tabela de usuários */}
      <div className="grid gap-4">
        {users.map((user) => {
          const isAdminUser = user.email === 'admin@doisnovemeia.com';

          return (
            <div key={user.id} className="border p-4 rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div className="flex gap-2">
                <button
                  disabled={isAdminUser}
                  className={`${
                    isAdminUser ? 'bg-gray-300 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500'
                  } text-black font-semibold px-3 py-1 rounded flex items-center gap-1 transition duration-500`}
                  onClick={() => {
                    setSelectedUser(user);
                    setShowEditModal(true);
                  }}
                >
                  <Pencil size={16} /> Editar
                </button>
                <button
                  disabled={isAdminUser}
                  className={`${
                    isAdminUser ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
                  } text-white font-semibold px-3 py-1 rounded flex items-center gap-1 transition duration-500`}
                  onClick={() => {
                    setSelectedUser(user);
                    setNewName('');
                    setNewEmail('');
                    setNewPassword('');
                    setShowDeleteModal(true);
                  }}
                >
                  <Trash2 size={16}/> Excluir
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de criação */}
      <Modal isOpen={showCreateModal} onClose={() => {
        setShowCreateModal(false);
      }}>
        <h2 className="text-xl font-bold mb-4">Novo Usuário</h2>
        <FormNovoUsuario onSuccess={() => {
          setShowCreateModal(false);
          location.reload();
        }}/>
      </Modal>

      {/* Modal de edição */}
      <Modal isOpen={showEditModal} 
        onClose={() => {
          setShowEditModal(false);
          setNewName('');
          setNewEmail('');
          setNewPassword('');
        }}
      >
        <h2 className="text-xl font-bold mb-4">Editar Usuário</h2>
        <label>Nome</label>
        <input
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className='w-full border p-2 rounded mb-4'
        />
        
        <label>Email</label>
        <input
          type='text'
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className='w-full border p-2 rounded mb-4'
        />

        <label>Senha</label>
        <input
          type='pasword'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className='w-full border p-2 rounded mb-4'
        />

        <button
          onClick={handleEdit}
          className="bg-green-brandGreen hover:bg-green-greenHover text-black font-semibold px-4 py-2 rounded transition duration-500"
        >
          Salvar
        </button>
      </Modal>

      {/* Modal de confirmação para exclusão */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <h2 className="text-lg font-bold mb-4">Confirmar Exclusão</h2>
        <p>Tem certeza que deseja excluir o usuário <strong>{selectedUser?.name}</strong>?</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => setShowDeleteModal(false)}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
          >
            Excluir
          </button>
        </div>
      </Modal>
    </main>
  );
}
