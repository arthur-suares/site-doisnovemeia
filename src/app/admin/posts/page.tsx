import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { redirect } from 'next/navigation';
import { sessionOptions, SessionData} from '@/lib/session';
import PostsPageCliente from './postsPageClient';

export default async function UsersPage() {
  const cookieStore = await cookies(); // 👈 aguarde os cookies
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn) {
    redirect('/login');
  }

  return <PostsPageCliente />;
}
