// src/app/api/user/change-email/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { changeUserEmail } from '@/controllers/userController';

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
    }

    const { newEmail, password } = await request.json();
    if (!newEmail || !password) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    await changeUserEmail({
      userId: session.userId,
      newEmail: newEmail,
      password_DB: password,
    });

    return NextResponse.json({ message: 'E-mail alterado com sucesso!' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
    let statusCode = 500;
    if (errorMessage.includes('Senha incorreta')) {
      statusCode = 401;
    } else if (errorMessage.includes('já está em uso')) {
      statusCode = 409; 
    }
    
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}