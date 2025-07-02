// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllUsers, createUser } from '../../../controllers/userController'; // use @ se estiver com path aliases

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.error('[GET USERS ERROR]', error);
    return NextResponse.json({ error: 'Erro ao buscar usuários' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Nome e email são obrigatórios' }, { status: 400 });
    }

    // ✅ Não passe `id` aqui
    const newUser = await createUser(name, email);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('[POST USER ERROR]', error);
    return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 500 });
  }
}

