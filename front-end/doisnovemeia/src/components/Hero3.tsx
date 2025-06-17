// app/components/Hero3.tsx (seu arquivo principal para esta seção)
'use client'; // Necessário para usar useState no DiferencialBox

import React from "react";
import Image from "next/image";
import DiferencialBox from './DiferencialBox'; // Importe o novo componente

import plantPageOla from "../../public/img/plant-pageOla.svg";
import gotasVerde from "../../public/img/gotas-verde.svg";

// Certifique-se de que as cores e fontes 'lemonMilkLight', 'lemonMilkBold' e 'gradient-linear-orange' estão configuradas no seu tailwind.config.js

export default function Hero3() {
    return (
        <section className="bg-gradient-linear-orange w-full py-16 px-8 relative overflow-hidden">
            <div className="absolute bottom-[5%] left-[5%] lg:bottom-[10%] lg:right-[12%] z-0">
                <Image
                    src={gotasVerde}
                    alt="" // Decorativo
                    width={100} // Ajuste o tamanho
                    height={100}
                    className="opacity-70 animate-float-slow delay-300" // Diferente delay para variedade
                />
            </div>
            <div className="mx-auto max-w-6xl relative z-10 flex flex-col items-center">
                {/* Top Text */}
                <div className="text-zinc-950 text-center max-w-4xl mb-12 font-lemonMilkLight text-lg lg:text-xl leading-relaxed">
                    <p className="mb-4">
                        Você deve estar pensando: “Por que contratar o serviço de um bando de jovens que ainda estão na faculdade?” Oras, o motivo é simples: não somos como as outras agências de publicidade, somos um laboratório de ideias e nos orgulhamos disso.
                    </p>
                    <p className="mb-4">
                        Em que outro lugar poderíamos experimentar sem medo de errar a não ser dentro da porta verde? Estamos sempre buscando inovar para garantir soluções criativas destinadas ao mercado publicitário, e nossa especialidade é sair do convencional. Também quer ser diferente? Passa no ninho!
                    </p>
                    <p className="font-lemonMilkBold">
                        Ainda não te convencemos? Então, dê uma olhada nos nossos diferenciais competitivos para mudar de ideia.
                    </p>
                </div>

                {/* Main Content Area: Diferenciais e Planta */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    {/* Diferenciais na Esquerda (e flutuam em mobile) */}
                    <div className="flex flex-col items-start space-y-4 lg:w-1/2 lg:pr-8">
                        <DiferencialBox
                            title="VETERANOS"
                            content="Com mais de 25 anos de história, acumulamos experiência e um portfólio sólido."
                        />
                        <DiferencialBox
                            title="NINHO CONECTADO"
                            content="Fazemos parte de uma rede nacional de empresas juniores, o que nos dá acesso a conhecimentos e parcerias valiosas."
                        />
                    </div>

                    {/* Imagem da Planta no Centro */}
                    <div className="my-8 lg:my-0 lg:w-auto flex justify-center relative">
                        <Image
                            src={plantPageOla}
                            alt="Planta estilizada com fundo quadriculado, representando criatividade"
                            width={450} // Ajuste o tamanho da imagem da planta
                            height={450}
                            className="w-full max-w-sm lg:max-w-md h-auto"
                        />
                    </div>

                    {/* Diferenciais na Direita (e flutuam em mobile) */}
                    <div className="flex flex-col items-end space-y-4 lg:w-1/2 lg:pl-8">
                        <DiferencialBox
                            title="MAIS QUE UMA AGÊNCIA"
                            content="Funcionamos como um laboratório de ideias, sempre experimentando e buscando soluções inovadoras fora do convencional."
                        />
                        <DiferencialBox
                            title="PREÇO PARCEIRO"
                            content="Oferecemos soluções de alta qualidade com um custo-benefício acessível, ideal para quem busca resultados e inovação sem comprometer o orçamento."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}