import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link'; // 1. Importar o componente Link
import { prisma } from '@/models/prisma';
import { sessionOptions, SessionData } from '@/lib/session'; // 2. Importar do local centralizado

export default async function AdminPage() {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);

  // 3. Verificação de sessão consistente com o resto do app
  if (!session.isLoggedIn || !session.userId) {
    redirect('/login');
  }

  // 4. Buscar dados do usuário no servidor, já que só temos o ID na sessão
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { email: true }
  });

  if (!user) {
    // Se o usuário da sessão não for encontrado no banco, deslogar e redirecionar
    session.destroy();
    redirect('/login');
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Painel do Administrador</h1>
      <p className="mt-2 text-lg">Bem-vindo, {user.email}!</p>
      <p className="text-gray-600">Este conteúdo é protegido e só pode ser visto por você.</p>
      
      <div className="mt-8">
        {/* 5. Adicionar o botão com o Link */}
        <Link href="/change-password">
          <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Alterar Senha
          </button>
        </Link>
      </div>
    </div>
  );
}