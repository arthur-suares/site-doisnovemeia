// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllUsers, createUser } from '../../../controllers/userController'; 
import bcrypt from 'bcrypt'

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
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Nome e email são obrigatórios' }, { status: 400 });
    }

    // Encriptar a senha antes de armazenar
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // ✅ Não passe `id` aqui
    const newUser = await createUser(name, email, hashedPassword);

    // Usando desestruturação com renomeação para não retornar a senha da resposta da requisição
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    console.error('[POST USER ERROR]', error);
    return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 500 });
  }
}

