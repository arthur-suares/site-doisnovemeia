import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { redirect } from 'next/navigation';
import { sessionOptions, SessionData} from '@/lib/session';
import UsersPageClient from './userPageClient';

export default async function UsersPage() {
  const cookieStore = await cookies(); // 👈 aguarde os cookies
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn) {
    redirect('/login');
  }

  return <UsersPageClient />;
}
