// app/api/postagens/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Para POST com imagem (form-data)
export async function POST(request: Request) {
  const formData = await request.formData();
  const title = formData.get("title")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const file = formData.get("imagem") as File;

  if (!file || !title) {
    return NextResponse.json({ error: "Título e imagem são obrigatórios" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const postagem = await prisma.postagem.create({
    data: {
      title,
      imagem: buffer,
      description,
    },
  });

  return NextResponse.json(postagem, { status: 201 });
}

// Para GET - lista todas as postagens (sem a imagem para economizar dados)
export async function GET() {
  const postagens = await prisma.postagem.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });

  return NextResponse.json(postagens);
}


