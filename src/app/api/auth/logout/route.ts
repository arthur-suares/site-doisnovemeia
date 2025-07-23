// src/app/api/auth/logout/route.ts

import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

export async function POST() {
  try {
    const session = await getSession();

    session.destroy();

    return NextResponse.json({ message: 'Logout bem-sucedido' });
  } catch (error) {
    console.error('Falha na API de Logout:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}