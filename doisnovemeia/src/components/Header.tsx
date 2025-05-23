'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FaBehance, FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import iconDois from "../../public/img/logo-doisnovemeia.svg";


export default function Header() {

    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null); // Estado para controlar qual ícone está com o mouse por cima
  
    const handleLinkClick = (linkName: string) => {
      setActiveLink(linkName);
    };

    return (
      <footer className="flex items-center justify-center px-6 py-8 gap-10">
        <div className='flex items-center gap-3'>
          <div>
            <Image
              src={iconDois}
              alt="Logo Dois Nove Meia"
              className="animate-pulseScale"
            />
          </div>
        </div>
        <nav className="flex gap-5 sm:text-sm justify-center font-lemonMilkLight rounded-full">
          <a
            href="#"
            className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
              activeLink === "OLA" ? "bg-purple-purpleOpacity" : ""
            }`}
            onClick={() => handleLinkClick("OLA")}
          >
            OLÁ
          </a>
          <a
            href="#"
            className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
              activeLink === "A GENTE" ? "bg-purple-purpleOpacity" : ""
            }`}
            onClick={() => handleLinkClick("A GENTE")}
          >
            A GENTE
          </a>
          <a
            href="#"
            className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
              activeLink === "PROJETOS" ? "bg-purple-purpleOpacity" : ""
            }`}
            onClick={() => handleLinkClick("PROJETOS")}
          >
            PROJETOS
          </a>
          <a
            href="#"
            className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
              activeLink === "SOLUCOES" ? "bg-purple-purpleOpacity" : ""
            }`}
            onClick={() => handleLinkClick("SOLUCOES")}
          >
            SOLUÇÕES
          </a>
          <a
            href="#"
            className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
              activeLink === "BORA CONVERSAR" ? "bg-purple-purpleOpacity" : ""
            }`}
            onClick={() => handleLinkClick("BORA CONVERSAR")}
          >
            BORA CONVERSAR
          </a>
          <a
            href="#"
            className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
              activeLink === "BLOG" ? "bg-purple-purpleOpacity" : ""
            }`}
            onClick={() => handleLinkClick("BLOG")}
          >
            BLOG
          </a>
          <a
            href="#"
            className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
              activeLink === "TRABALHE COM A GENTE" ? "bg-purple-purpleOpacity" : ""
            }`}
            onClick={() => handleLinkClick("TRABALHE COM A GENTE")}
          >
            TRABALHE COM A GENTE
          </a>
        </nav>
        <div className="flex items-center bg-purple-brandPurle gap-4 px-4 py-3 rounded-full">
          {/* Ícone LinkedIn */}
          <a
            href='https://www.linkedin.com/company/doisnovemeia-publicidade/?originalSubdomain=br'
            className='text-3xl text-white transition-transform duration-200'
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ transform: hoveredIcon === 'linkedin' ? 'scale(1.2)' : 'scale(1)' }}
          >
            <FaLinkedinIn />
          </a>
          {/* Ícone Facebook */}
          <a
            href='https://www.facebook.com/Doisnovemeia?locale=pt_BR'
            className='text-3xl text-white transition-transform duration-200'
            onMouseEnter={() => setHoveredIcon('facebook')}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ transform: hoveredIcon === 'facebook' ? 'scale(1.2)' : 'scale(1)' }}
          >
            <FaFacebook />
          </a>
          {/* Ícone Instagram */}
          <a
            href='https://www.instagram.com/doisnovemeia/'
            className='text-3xl text-white transition-transform duration-200'
            onMouseEnter={() => setHoveredIcon('instagram')}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ transform: hoveredIcon === 'instagram' ? 'scale(1.2)' : 'scale(1)' }}
          >
            <FaInstagram />
          </a>
          {/* Ícone Behance */}
          <a
            href='https://www.behance.net/doisnovemeia?locale=pt_BR'
            className='text-3xl text-white transition-transform duration-200'
            onMouseEnter={() => setHoveredIcon('behance')}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ transform: hoveredIcon === 'behance' ? 'scale(1.2)' : 'scale(1)' }}
          >
            <FaBehance />
          </a>
        </div>
      </footer>
    );
}