// src/app/api/auth/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import bcrypt from 'bcrypt'
import { prisma } from '@/models/prisma';
import { getSession } from '@/lib/session';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: 'Email e/ou senha inválidos!' }, { status: 401 });
    }

    const isPasswordValid = await compare(password, user.password);
    
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Email e/ou senha inválidos!'}, { status: 401 });
    }

    const session = await getSession();
    session.userId = user.id;    
    session.isLoggedIn = true;
    await session.save();         

    return NextResponse.json({ message: 'Login bem-sucedido' }, { status: 200 });
  } catch (error) {
    console.error('Falha na API de Login:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}