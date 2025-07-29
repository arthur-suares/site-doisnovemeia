// app/a-gente/components/AboutHeroSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import { MdWarningAmber } from "react-icons/md";

type Postagem = {
  id: string;
  title: string;
  imagem: string | null;
  description: string;
};

export default function Solutions() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  useEffect(() => {
    async function fetchPostagens() {
      try {
        const res = await fetch('/api/postagens/show'); // Ajuste para a rota correta se necessário
        if (res.ok) {
          const data = await res.json();
          setPostagens(data);
        } else {
          console.error('Erro ao buscar postagens');
        }
      } catch (error) {
        console.error('Erro ao buscar postagens:', error);
      }
    }

    fetchPostagens();
  }, []);

  return (
    <section className="flex flex-col relative w-full bg-gradient-linear-green py-16 px-8 overflow-hidden text-white">
      <div className="mx-auto max-w-7xl w-full relative z-20">
        {postagens.length === 0 ? (
          <div className="flex bg-purple-brandPurle items-center justify-center border border-white rounded-xl p-6 gap-4">
            <MdWarningAmber className="text-white text-3xl" />
            <p className="font-lemonMilkLight-bold text-white text-sm">Ainda não foram cadastradas soluções</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {postagens.map((postagem) => (
              <div
                key={postagem.id}
                className="bg-orange-brandOrange rounded-xl px-4 py-4 flex flex-col justify-between relative h-[247px] max-w-[256px]"
              >
                <p className='font-lemonMilkBold text-sm leading-relaxed mb-4'>{postagem.title}</p>
                
                <img
                  src={postagem.imagem ?? ''}
                  alt="Imagem da postagem"
                  className="rounded-xl shadow-md max-w-md"
                />
                
                <div>
                  <p style={{ fontFamily: 'Lemon Milk Medium, sans-serif', fontWeight: '600' }}>{postagem.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
