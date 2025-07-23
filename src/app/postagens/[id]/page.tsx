"use client";

import { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function PostagemImagem({ params }: Props) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/postagens/${params.id}/imagem`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Imagem não encontrada");
        const blob = await res.blob();
        setImageSrc(URL.createObjectURL(blob));
      })
      .catch((err) => {
        console.error(err);
        setImageSrc(null);
      });
  }, [params.id]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Imagem da Postagem</h1>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Imagem da postagem"
          className="rounded-xl shadow-md max-w-md"
        />
      ) : (
        <p className="text-red-600">Imagem não disponível</p>
      )}
    </div>
  );
}
