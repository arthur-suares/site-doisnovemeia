// app/a-gente/components/AboutHeroSection.tsx (agora Look)
'use client';

import React from 'react';
// Mantenha outros imports se existirem e forem usados no componente completo
// import Image from 'next/image';

export default function Register() {
  return (
    <section className="relative w-full bg-gradient-custom-purple py-40 overflow-hidden items-center justify-center text-center">
      <div className="mx-auto max-w-full relative z-20 text-white text-xl">     
        <div className="max-w-4xl mx-auto"> 
          <p className='text-white font-lemonMilkLight text-center mb-8'> 
            Você tem vontade de iniciar a sua experiência no mercado desde cedo? </p>
          <p className='text-white font-lemonMilkLight text-center mb-8'> 
             A Dois é o lugar certo para colocar todo o seu conhecimento em prática.</p>
          <p className='text-white font-lemonMilkLight text-center'> 
            A seleção de novos membros é feita a partir do Processo Seletivo, que ocorre no início de cada semestre letivo. O Processo Seletivo é aberto exclusivamente a todos os alunos de graduação da Faculdade de Comunicação da Universidade de Brasília, dos cursos de Audiovisual, Publicidade e Propaganda, Comunicação Organizacional e Jornalismo.</p>
        </div>
      </div>
        <button className="bg-white/40 text-white py-4 px-32 rounded-full items-center justify-center hover:scale-105 transition-transform duration-300 mt-16">
        <strong className="font-lemonMilkBold">
            Cadastre-se
        </strong>
        </button>
    </section>
  );
}