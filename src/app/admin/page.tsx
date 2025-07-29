import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Users, FileText } from 'lucide-react'; // Exemplo de ícones
import { prisma } from '@/models/prisma';
import { sessionOptions, SessionData } from '@/lib/session';
import LogoutButton from '@/components/LogoutButton'; // 1. Importar o botão

export default async function AdminPage() {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);

  if (!session.isLoggedIn || !session.userId) {
    redirect('/login');
  }
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { email: true }
  });

  if (!user) {
    session.destroy();
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Painel do Administrador</h1>
        <p className="text-center text-gray-600">Bem-vindo, {user.email}!</p>

        {/* Grid de botões */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {/* Card: Gerenciar Postagens */}
          <Link
            href="/admin/posts"
            className="w-full h-[100px] flex items-center gap-[3vw] px-[2vw] border-2 rounded-xl cursor-pointer transition-all duration-200 font-sans 
                      bg-purple-brandPurle text-white 
                      hover:bg-beige-brandBeige hover:text-black"
          >
            <FileText className="text-[40px]" />
            <div className="flex flex-col text-sm max-[600px]:text-[12px]">
              <h3 className="text-base font-semibold mb-1">Gerenciar Postagens</h3>
              <span className="text-xs max-[600px]:text-[10px]">Criar, editar e remover postagens</span>
            </div>
          </Link>

          {/* Card: Gerenciar Usuários */}
          <Link
            href="/admin/users"
            className="w-full h-[100px] flex items-center gap-[3vw] px-[2vw] border-2 rounded-xl cursor-pointer transition-all duration-200 font-sans 
                      bg-purple-brandPurle text-white 
                      hover:bg-beige-brandBeige hover:text-black"
          >
            <Users className="text-[40px]" />
            <div className="flex flex-col text-sm max-[600px]:text-[12px]">
              <h3 className="text-base font-semibold mb-1">Gerenciar Usuários</h3>
              <span className="text-xs max-[600px]:text-[10px]">Adicionar, editar e remover usuários</span>
            </div>
          </Link>
        </div>

        {/* Botão logout centralizado */}
        <div className="flex justify-center mt-4">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
