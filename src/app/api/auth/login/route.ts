// Caminho: src/app/api/auth/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getIronSession, IronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { compare } from 'bcrypt';
import { prisma } from '@/models/prisma';
import { sessionOptions } from '@/lib/session';

export interface SessionData {
  user?: { id: string; email: string; };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 });
    }

    const session: IronSession<SessionData> = await getIronSession(
      await cookies(),
      sessionOptions,
    );
    
    session.user = { id: user.id, email: user.email };
    await session.save();

    return NextResponse.json({ message: 'Login bem-sucedido' }, { status: 200 });
  } catch (error) {
    console.error('Falha na API de Login:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}