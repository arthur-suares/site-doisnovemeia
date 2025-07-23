import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const postagem = await prisma.postagem.findUnique({
    where: { id: params.id },
    select: { imagem: true },
  });

  if (!postagem || !postagem.imagem) {
    return new NextResponse("Imagem não encontrada", { status: 404 });
  }

  return new NextResponse(postagem.imagem, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg", // ou image/png, dependendo do tipo que você está salvando
      "Content-Length": postagem.imagem.length.toString(),
    },
  });
}
