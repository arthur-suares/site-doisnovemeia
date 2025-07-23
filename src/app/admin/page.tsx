import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
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
    <div className="p-8">
      {/* 2. Div principal para alinhar título e botão de logout */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Painel do Administrador</h1>
          <p className="mt-2 text-lg">Bem-vindo, {user.email}!</p>
          <p className="text-gray-600">Este conteúdo é protegido e só pode ser visto por você.</p>
        </div>
        
        {/* 3. Botão de logout posicionado aqui */}
        <LogoutButton />
      </div>
      
      <div className="mt-8 flex gap-4">
        <Link href="/change-password">
          <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Alterar Senha
          </button>
        </Link>
        
        <Link href="/change-email">
          <button className="px-4 py-2 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Alterar E-mail
          </button>
        </Link>
      </div>
    </div>
  );
}