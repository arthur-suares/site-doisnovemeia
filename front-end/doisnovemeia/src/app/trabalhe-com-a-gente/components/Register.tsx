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

        {/* Processo seletivo */}
<div className='flex flex-col mt-24 items-center justify-center'>
  <p className='font-lemonMilkBold text-white text-xl mb-16'>Nosso Processo Seletivo é dividido em 4 fases: </p>
  {/* O container principal já força os filhos a terem a mesma altura */}
  <div className='flex flex-col lg:flex-row items-stretch justify-center gap-8'>

    {/* Box: JOB DE CRIATIVIDADE */}
    <div
      // ADICIONADO: flex e flex-col para controlar o conteúdo interno
      className="flex flex-col max-w-xs px-8 pt-8 pb-16 rounded-[40px] shadow-lg text-center" 
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.144) 0%, rgba(255, 255, 255, 0.2) 100%)',
        border: '2px solid #FFFFFF',
        backdropFilter: 'blur(17px)',
        WebkitBackdropFilter: 'blur(17px)'
      }}
    >
      <h3 className="font-lemonMilkBold text-lg text-white mb-6 text-center">JOB DE CRIATIVIDADE</h3>
      {/* ADICIONADO (Opcional): flex-grow para fazer o parágrafo preencher o espaço restante */}
      <p className='flex-grow font-lemonMilkLight text-md text-white'>Formato livre para se apresentar de maneira criativa</p>
    </div>

    {/* Box: Entrevistas */}
    <div
      // ADICIONADO: flex e flex-col
      className="flex flex-col max-w-xs px-8 pt-8 pb-16 rounded-[40px] shadow-lg text-center"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.144) 0%, rgba(255, 255, 255, 0.2) 100%)',
        border: '2px solid #FFFFFF',
        backdropFilter: 'blur(17px)',
        WebkitBackdropFilter: 'blur(17px)'
      }}
    >
      <h3 className="font-lemonMilkBold text-lg text-white mb-6 text-center">ENTREVISTAS</h3>
      <p className='flex-grow font-lemonMilkLight text-md text-white'>Para entender como a Doisnovemeia se encaixa na rotina e na perspectiva de trajetória profissional de cada um</p>
    </div>

    {/* Box: JOB ESPECÍFICO DA ÁREA */}
    <div
      // ADICIONADO: flex e flex-col
      className="flex flex-col max-w-xs px-8 pt-8 pb-16 rounded-[40px] shadow-lg text-center"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.144) 0%, rgba(255, 255, 255, 0.2) 100%)',
        border: '2px solid #FFFFFF',
        backdropFilter: 'blur(17px)',
        WebkitBackdropFilter: 'blur(17px)'
      }}
    >
      <h3 className="font-lemonMilkBold text-lg text-white mb-6 text-center">JOB ESPECÍFICO DA ÁREA</h3>
      <p className='flex-grow font-lemonMilkLight text-md text-white'>Para avaliar o fit (encaixe) do(a) candidato(a) com uma das nossas áreas que escolher</p>
    </div>

    {/* Box: dinâmicas */}
    <div
      // ADICIONADO: flex e flex-col
      className="flex flex-col max-w-xs px-8 pt-8 pb-16 rounded-[40px] shadow-lg text-center"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.144) 0%, rgba(255, 255, 255, 0.2) 100%)',
        border: '2px solid #FFFFFF',
        backdropFilter: 'blur(17px)',
        WebkitBackdropFilter: 'blur(17px)'
      }}
    >
      <h3 className="font-lemonMilkBold text-lg text-white mb-6 text-center">dinâmicas</h3>
      <p className='flex-grow font-lemonMilkLight text-md text-white'>Objetiva entender como o(a) candidato(a) funciona em trabalho em grupo</p>
    </div>
        
  </div>
</div>

    </section>
  );
}