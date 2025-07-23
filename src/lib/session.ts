// src/lib/session.ts

import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import type { SessionOptions } from 'iron-session';

export interface SessionData {
  userId?: string;
  isLoggedIn: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'site-doisnovemeia-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  return session;
}