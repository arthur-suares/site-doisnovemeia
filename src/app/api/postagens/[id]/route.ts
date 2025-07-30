// app/api/postagens/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// PATCH - Atualizar título de uma postagem
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
 
  try
  {
    const body = await req.json();
    const { title, description } = body;

    if (!title) {
        return NextResponse.json({ error: "Título é obrigatório" }, { status: 400 });
    }

    const postagem = await prisma.postagem.update({
        where: { id },
        data: { title, description },
    });

    return NextResponse.json(postagem);
  }
  catch (error)
  {

  }
}

// DELETE - Remover uma postagem
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = context.params;

  try {
    await prisma.postagem.delete({ where: { id } });
    return NextResponse.json({ message: "Postagem deletada com sucesso" });
  } catch (error) {
    return NextResponse.json({ error: "Postagem não encontrada ou erro ao deletar" }, { status: 404 });
  }
}
