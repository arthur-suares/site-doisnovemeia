// app/a-gente/components/AboutHeroSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { IoAddOutline } from 'react-icons/io5'; // Para o ícone de +

// Caminhos dos assets (ajuste conforme a estrutura do seu projeto)
import aviaoPaper from '../../../public/img/aviao-papel.svg';
import gotasVerde from '../../../public/img/gotas-verde.svg';

// --- REMOVIDO: Definição de Tipos PlusPosition e NinhoDataItem ajustada ---
interface NinhoDataItem {
  text: string;
  // A propriedade 'plusPosition' foi removida, pois a posição será definida explicitamente abaixo
}
// --- FIM DA DEFINIÇÃO DE TIPOS ---


export default function AboutHeroSection() {
  // Dados dos "Ninhos". A propriedade 'plusPosition' foi removida de cada objeto.
  const ninhosData: NinhoDataItem[] = [
    { text: "SER NINHO" },
    { text: "DOIS É PLURAL" },
    { text: "ALUCINADOS" },
    { text: "SANGUE NO OLHO" },
    { text: "FORA DA GAIOLA" },
  ];

  return (
    <section className="relative w-full bg-purple-brandPurle py-16 px-8 overflow-hidden">
      {/* Imagem do Avião de Papel (posicionamento absoluto para "cortar" a página) */}
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

      {/* Gotas Verdes (decorativas, posicionamento absoluto) */}
      <div className="absolute top-[20%] right-[5%] z-0">
        <Image
          src={gotasVerde}
          alt="" // Decorativo
          width={100}
          height={100}
          className="animate-float-slow"
        />
      </div>
      <div className="absolute bottom-[10%] left-[10%] z-0">
        <Image
          src={gotasVerde}
          alt="" // Decorativo
          width={120}
          height={120}
          className="animate-float-slow delay-300"
        />
      </div>

      {/* Conteúdo Principal (Texto e Ninhos) - Acima das imagens decorativas */}
      <div className="mx-auto max-w-7xl relative z-20 text-white">
        {/* Bloco de Texto Principal Superior */}
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <p className="text-lg font-lemonMilkLight leading-relaxed mb-4">
            Nós somos a Dois: alucinada, colorida, inquieta. E já podia parar por aí, porque empresas jovens não precisam dizer muito.
          </p>
          <p className="text-lg font-lemonMilkLight leading-relaxed mb-4">
            Quem é jovem não fala. Faz, age, cria. Achou rebelde? A gente prefere fora da gaiola. </p>
          <p className="text-lg font-lemonMilkLight leading-relaxed mb-4">
            Ser jovem é muito pouco sobre idade e muito mais sobre vontade. Vontade de querer mudar o mundo, de criar soluções que ninguém encontra, de juntar uma galera pra brincar de cientista. Até porque inovação e seriedade não se misturam muito bem, mas o seu negócio e a gente, com certeza.
          </p>
          <p className="text-lg font-lemonMilkLight leading-relaxed">
            É sobre ser um tubo de ensaio, um laboratório onde a gente experimenta, separa, mistura, recomeça. Errar não é problema, tem muito tempo pra tentar de novo e você sabe disso, porque escolheu a gente, escolheu arriscar no criativo, no novo. Não tem quem possa repetir isso como a Dois.</p>
        </div>

        {/* Novo Bloco de Texto Acima dos Ninhos */}
        <div 
        className="max-w-4xl mx-auto mb-16 px-4 py-8 rounded-[40px]"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.144) 0%, rgba(255, 255, 255, 0.2) 100%)',
          border: '2px solid #FFFFFF',
          backdropFilter: 'blur(17px)',
          WebkitBackdropFilter: 'blur(17px)' // Prefixo para compatibilidade com Safari
        }}>
    <p className="text-lg font-lemonMilkRegular leading-relaxed text-center px-10">
        A CULTURA DA DOIS É O QUE MANTÉM A EMPRESA CONECTADA, ELA É TÃO IMPORTANTE QUE CARREGA UM PEDAÇO DA ESSÊNCIA DE CADA MEMBRO - OU MELHOR, PASSARINHO - QUE POUZOU AQUI.
    </p>
</div>
        {/* Ninhos (Círculos com Texto e Bolinha Laranja com +) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mt-16 px-4">
          {ninhosData.map((ninho, index) => (
            // O container do ninho principal e da bolinha do '+'
            <div key={index} className="relative flex flex-col items-center">
              {/* Círculo Principal - BrandBlue */}
              <div
                className={`flex items-center justify-center rounded-full w-32 h-32 md:w-40 md:h-40 text-[#3E3E3E] font-lemonMilkBold text-center text-base md:text-lg p-2 shadow-lg
                  bg-blue-brandBlue transform transition-transform duration-300 hover:scale-105`}
              >
                {ninho.text}
              </div>
              {/* Bolha do '+' - BrandOrange, posicionada absolutamente.
                  AQUI: A lógica para posicionamento individual, baseada no 'index'.
                  Você DEVE ajustar essas classes para cada 'index' conforme seu design.
              */}
              <div
                className={`absolute z-30
                  flex items-center justify-center rounded-full w-10 h-10 shadow-md
                  bg-orange-brandOrange text-white
                  // POSICIONAMENTO ESPECÍFICO PARA CADA NINHO ABAIXO
                  ${index === 0 ? 'bottom-[-3] right-0' : ''} // SER NINHO 
                  ${index === 1 ? 'top-[-3] right-0' : ''}          // DOIS É PLURAL 
                  ${index === 2 ? 'bottom-[-3] right-0' : ''}     // ALUCINADOS 
                  ${index === 3 ? 'top-[-3] right-0' : ''}         // SANGUE NO OLHO  
                  ${index === 4 ? 'bottom-[-3] right-0' : ''}        // FORA DA GAIOLA  
                `}
              >
                <IoAddOutline size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}