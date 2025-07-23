// app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, {params}: {params: {id: string}}) {
  try {
    const { id } = params;
    const body = await req.json();
    const { name, email, password } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID é obrigatório para atualização' }, { status: 400 });
    }

    let hashedPassword = undefined;

    if (password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }
    
    const updatedUser = await prisma.user.update({
        where: { id },
        data: {
            name,
            email,
            ...(hashedPassword && { password: hashedPassword })
        },
    });

    const { password: _, ...userWithoutPassword } = updatedUser;

    return NextResponse.json(userWithoutPassword, { status: 200 });
  } catch (error) {
    console.error('[PATCH USER ERROR]', error);
    return NextResponse.json({ error: 'Erro ao atualizar usuário' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    
    try 
    {
        if (!id) {
            return NextResponse.json({ error: 'ID é obrigatório para exclusão' }, { status: 400 });
        }

        const deletedUser = await prisma.user.delete({ where: {id} });

        if (!deletedUser) {
            return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Usuário excluído com sucesso' }, { status: 200 });
    } 
    catch (error) 
    {
        console.error('[DELETE USER ERROR]', error);
        return NextResponse.json({ error: 'Erro ao excluir usuário' }, { status: 500 });
    }
}
