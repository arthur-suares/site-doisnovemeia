import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { redirect } from 'next/navigation';
import { sessionOptions } from '@/lib/session';
import { SessionData } from '@/app/api/auth/login/route';
import UsersPageClient from './userPageClient';

export default async function UsersPage() {
  const cookieStore = await cookies(); // 👈 aguarde os cookies
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.user) {
    redirect('/login');
  }

  return <UsersPageClient />;
}
