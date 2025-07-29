import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Para GET - lista todas as postagens 
export async function GET() {
  const postagens = await prisma.postagem.findMany({
    select: {
      id: true,
      title: true,
      imagem: true,
      description: true,
    },
  });

  // Converte imagem binária para base64
  const postagensComImagem = postagens.map((postagem) => ({
    ...postagem,
    imagem: postagem.imagem
      ? `data:image/png;base64,${Buffer.from(postagem.imagem).toString('base64')}`
      : null,
  }));

  return NextResponse.json(postagensComImagem);
}


// export async function GET(
//   _req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const postagem = await prisma.postagem.findUnique({
//     where: { id: params.id },
//     select: { imagem: true },
//   });

//   if (!postagem || !postagem.imagem) {
//     return new NextResponse("Imagem não encontrada", { status: 404 });
//   }

//   return new NextResponse(postagem.imagem, {
//     status: 200,
//     headers: {
//       "Content-Type": "image/jpeg", // ou image/png, dependendo do tipo que você está salvando
//       "Content-Length": postagem.imagem.length.toString(),
//     },
//   });
// }