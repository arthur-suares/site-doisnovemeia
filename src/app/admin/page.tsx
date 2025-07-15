import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sessionOptions } from '@/lib/session';
import { SessionData } from '@/app/api/auth/login/route';

export default async function AdminPage() {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  if (!session.user) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Painel do Administrador</h1>
      <p>Bem-vindo, {session.user.email}!</p>
      <p>Este conteúdo é protegido e só pode ser visto por você.</p>
    </div>
  );
}