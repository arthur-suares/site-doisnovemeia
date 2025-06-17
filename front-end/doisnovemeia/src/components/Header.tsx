'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importe o componente Link do Next.js
import { FaBehance, FaInstagram, FaLinkedinIn, FaFacebook, FaBars, FaTimes, FaUsers } from "react-icons/fa";
import iconDois from "../../public/img/logo-doisnovemeia.svg";
import { RiChatSmile3Line } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { FaPuzzlePiece, FaBlog } from "react-icons/fa6";
import { BsChatText } from "react-icons/bs";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation'; // Importe usePathname para saber a rota atual


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Obtém a rota atual

  const navItems = [
    { label: "OLÁ", icon: <RiChatSmile3Line size={18} />, href: "/" }, // Página inicial
    { label: "A GENTE", icon: <FaUsers size={18} />, href: "/a-gente" },
    { label: "PROJETOS", icon: <GrProjects size={18} />, href: "/projetos" },
    { label: "SOLUÇÕES", icon: <FaPuzzlePiece size={18} />, href: "/solucoes" },
    { label: "BORA CONVERSAR", icon: <BsChatText size={18} />, href: "/bora-conversar" },
    { label: "BLOG", icon: <FaBlog size={18} />, href: "/blog" },
    { label: "TRABALHE COM A GENTE", icon: <IoCodeWorkingOutline size={22} />, href: "/trabalhe-com-a-gente" },
  ];

  // Função para verificar se o link está ativo
  const isActive = (href: string) => {
    // Para a página inicial, apenas se o pathname for exatamente '/'
    if (href === '/') {
      return pathname === '/';
    }
    // Para outras páginas, verifica se o pathname começa com o href (útil para rotas aninhadas futuras)
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Redes sociais - aparece no topo em telas menores */}
      <div className="flex lg:hidden w-full bg-purple-brandPurle py-2 justify-center gap-6 fixed top-0 left-0 z-40">
        <a
          href='https://www.linkedin.com/company/doisnovemeia-publicidade/?originalSubdomain=br'
          className='text-2xl text-white hover:scale-125 transition-transform'
          target="_blank" // Abrir em nova aba
          rel="noopener noreferrer" // Segurança
        >
          <FaLinkedinIn />
        </a>
        <a
          href='https://www.facebook.com/Doisnovemeia?locale=pt_BR'
          className='text-2xl text-white hover:scale-125 transition-transform'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href='https://www.instagram.com/doisnovemeia/'
          className='text-2xl text-white hover:scale-125 transition-transform'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href='https://www.behance.net/doisnovemeia?locale=pt_BR'
          className='text-2xl text-white hover:scale-125 transition-transform'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance />
        </a>
      </div>

      {/* Header desktop */}
      <header className="hidden lg:flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Link href="/"> {/* Logo clicável para a Home */}
            <Image
              src={iconDois}
              alt="Logo Dois Nove Meia"
              className="animate-pulseScale"
            />
          </Link>
        </div>

        <nav className="flex gap-5 font-lemonMilkLight rounded-full">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href} // Use item.href aqui
              className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
                isActive(item.href) ? "bg-purple-purpleOpacity font-lemonMilkBold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)} // Fecha o menu móvel ao clicar
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center bg-purple-brandPurle gap-4 px-4 py-3 rounded-full">
          <a
            href='https://www.linkedin.com/company/doisnovemeia-publicidade/?originalSubdomain=br'
            className='text-3xl text-white hover:scale-125 transition-transform'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href='https://www.facebook.com/Doisnovemeia?locale=pt_BR'
            className='text-3xl text-white hover:scale-125 transition-transform'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com/doisnovemeia/'
            className='text-3xl text-white hover:scale-125 transition-transform'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href='https://www.behance.net/doisnovemeia?locale=pt_BR'
            className='text-3xl text-white hover:scale-125 transition-transform'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
        </div>
      </header>


      {/* Botão hamburguer - fixo e flutuante no mobile */}
      <button
        className="lg:hidden fixed top-3 left-4 z-50 text-3xl text-purple-brandPurle bg-white shadow-md rounded-md p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Drawer menu lateral */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white z-40 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-20`}
      >
        <div className="flex flex-col items-start gap-6 px-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href} // Use item.href aqui
              className={`flex items-center gap-2 text-lg ${
                isActive(item.href) ? "text-purple-brandPurle font-lemonMilkBold" : "text-black"
              }`}
              onClick={() => setIsMenuOpen(false)} // Fecha o menu móvel ao clicar
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}