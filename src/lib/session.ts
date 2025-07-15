import type { SessionOptions } from 'iron-session';

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'site-doisnovemeia-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};