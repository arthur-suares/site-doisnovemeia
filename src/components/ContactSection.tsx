// app/components/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import aviao from '../../public/img/aviao-papel.svg';
import olhosAzuis from '../../public/img/gotas-azuis.svg';
import olhosVerde from '../../public/img/gotas-verde.svg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    howFound: '',
    problem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', howFound: '', problem: '' });
  };

  return (
    <section className="relative w-full bg-gradient-custom-purple py-20 px-8 overflow-hidden">
      {/* Título Principal */}
      <h1 className="text-2xl md:text-xl font-lemonMilkRegular text-white text-center mb-16">
        BORA CONVERSAR
      </h1>

      {/* Formulário Principal */}
      <div className="relative">
        {/* Adicionado imagens com posicionamento */}
        <Image
          src={olhosAzuis}
          alt="Olhos Azuis"
          className="absolute bottom-10 left-22 z-0"
        />
        <Image
          src={olhosVerde}
          alt="Olhos Verdes"
          className="absolute top-10 right-10 z-0"
        />
        <Image
          src={aviao}
          alt="Avião de Papel"
          className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 z-0 w-[70%]"
        />
        
        <form onSubmit={handleSubmit} className="mx-auto max-w-7xl relative z-10 flex flex-col items-center">
          {/* Bloco 1: Campos de Input */}
          <div className="relative bg-orange-brandOrange p-8 shadow-lg w-[60%] self-start ml-10">
            {/* Ponta do Balão */}
            <div className="absolute top-0 left-0 -translate-x-1/2 w-8 h-8 bg-orange-brandOrange transform rotate-45 rounded-sm"></div>

            <label htmlFor="name" className="block text-white font-lemonMilkLight text-md mb-2">COMO QUER SER CHAMADO</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-6 rounded-full border-0 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-brandPurle focus:outline-none"
              required
            />

            <label htmlFor="email" className="block text-white font-lemonMilkLight text-md mb-2">QUAL O SEU E-MAIL?</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-6 rounded-full border-0 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-brandPurle focus:outline-none"
              required
            />

            <label htmlFor="phone" className="block text-white font-lemonMilkLight text-md mb-2">QUAL O SEU NÚMERO DE TELEFONE?</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mb-6 rounded-full border-0 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-brandPurle focus:outline-none"
            />

            <label htmlFor="howFound" className="block text-white font-lemonMilkLight text-md mb-2">COMO VOCÊ NOS CONHECEU?</label>
            <input
              type="text"
              id="howFound"
              name="howFound"
              value={formData.howFound}
              onChange={handleChange}
              className="w-full p-3 rounded-full border-0 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-brandPurle focus:outline-none"
            />
          </div>

          {/* Bloco 2: Campo de Problema e Botão Enviar */}
          <div className="flex flex-col relative bg-orange-brandOrange p-8 w-[60%] mt-14 self-end">
            <label htmlFor="problem" className="block text-white font-lemonMilkLight text-xl mb-4">CONTE SEU PROBLEMA QUE VAMOS BUSCAR A SOLUÇÃO!</label>
            <textarea
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              rows={8}
              className="w-full p-3 mb-8 rounded-3xl border-0 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-brandPurle focus:outline-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-[50%] self-end bg-green-brandGreen text-[#3E3E3E] font-lemonMilkBold text-lg py-4 rounded-full shadow-md hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
