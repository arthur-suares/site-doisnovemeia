// app/a-gente/components/EggSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import aviaoPaper from '../../../../public/img/aviao-papel.svg';

export default function OurStorySection() {

  return (
    <section className="relative w-full bg-gradient-custom-purple py-16 px-8 overflow-hidden">
        <h1 className='font-lemonMilkBold text-white items-center justify-center text-center mb-14'>
            Nossa História
        </h1>
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 -rotate-12 h-auto pointer-events-none z-10 lg:w-[100vw] lg:top-[-10%] lg:-rotate-6">
        <Image
          src={aviaoPaper}
          alt="Avião de papel cortando a seção"
          width={1000} // Valor grande para preencher a tela, será escalado pelo w-full
          height={300} // Ajuste a altura para manter a proporção correta do SVG
          className="w-full h-auto" // w-full para preencher o div pai, opacity para sutileza
          priority // Se for visível no carregamento inicial da página
        />
      </div>
      <div className="mx-auto flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8">
        {/* Coluna 1: Missão */}
        <div className="flex flex-col p-6 border-2 border-white rounded-[40px] bg-white/20 shadow-lg w-[50%]">
            <p className="text-justify font-lemonMilkBold text-white leading-relaxed mb-6">
                A Dois surgiu após um ciclo de palestras, quando foi debatida a necessidade de uma vivência prática da publicidade. A partir daí, um grupo de estudantes inquietos de Publicidade e Propaganda da UnB, tiveram uma ideia para lá de alucinada de fundar a primeira Empresa Júnior de Comunicação da Universidade de Brasília, e uma das primeiras do Centro-Oeste. 
            </p>
            <p className="text-justify font-lemonMilkBold text-white leading-relaxed mb-6">
            Além de contribuir com a melhoria do curso de Comunicação Social, a fundação de uma empresa júnior seria um excelente trabalho de conclusão de curso, e, consequentemente, um excelente desfecho para o curso deles.
        </p>
        <p className="text-justify font-lemonMilkBold text-white leading-relaxed mb-6">
            A Doisnovemeia Publicidade então foi inaugurada no dia 27 de junho de 1996, no 2° semestre de 1996 (daí o nome Doisnovemeia). Em mais de 27 anos de história, é hoje referência de empresa júnior no Distrito Federal e de resultado no mercado publicitário de Brasília.  </p>
        <p className="text-justify font-lemonMilkBold text-white leading-relaxed mb-6">
            Nesse período, ganhamos 3 prêmios, "Fest Rádio 98 - III Festival Transamérica de Criação para Rádio - Categoria Institucional", em março de 1999. O prêmio do calendário "Por um mundo melhor" realizado pela Gráfica Positiva e Correio Braziliense em julho de 2004. Por fim, o mais importante deles, um Prêmio Colunistas, categoria "Televisão e Cinema - Cultura e Educação", com o vídeo Semana de 22, no ano de 2006. </p>
        </div>
      </div>
      </section>
  );
}