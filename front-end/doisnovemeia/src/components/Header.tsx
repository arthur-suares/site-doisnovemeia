'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FaBehance, FaInstagram, FaLinkedinIn, FaFacebook, FaBars, FaTimes, FaUsers } from "react-icons/fa";
import iconDois from "../../public/img/logo-doisnovemeia.svg";
import { RiChatSmile3Line } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { FaPuzzlePiece, FaBlog } from "react-icons/fa6";
import { BsChatText } from "react-icons/bs";
import { IoCodeWorkingOutline } from "react-icons/io5";


export default function Header() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  const navItems = [
  { label: "OLÁ", icon: <RiChatSmile3Line size={18} /> },
  { label: "A GENTE", icon: <FaUsers size={18} /> },
  { label: "PROJETOS", icon: <GrProjects size={18} /> },
  { label: "SOLUÇÕES", icon: <FaPuzzlePiece size={18} /> },
  { label: "BORA CONVERSAR", icon: <BsChatText size={18} /> },
  { label: "BLOG", icon: <FaBlog size={18} /> },
  { label: "TRABALHE COM A GENTE", icon: <IoCodeWorkingOutline size={22} /> },
];

  return (
    <>
      {/* Redes sociais - aparece no topo em telas menores */}
      <div className="flex lg:hidden w-full bg-purple-brandPurle py-2 justify-center gap-6 fixed top-0 left-0 z-40">
        <a
          href='https://www.linkedin.com/company/doisnovemeia-publicidade/?originalSubdomain=br'
          className='text-2xl text-white hover:scale-125 transition-transform'
        >
          <FaLinkedinIn />
        </a>
        <a
          href='https://www.facebook.com/Doisnovemeia?locale=pt_BR'
          className='text-2xl text-white hover:scale-125 transition-transform'
        >
          <FaFacebook />
        </a>
        <a
          href='https://www.instagram.com/doisnovemeia/'
          className='text-2xl text-white hover:scale-125 transition-transform'
        >
          <FaInstagram />
        </a>
        <a
          href='https://www.behance.net/doisnovemeia?locale=pt_BR'
          className='text-2xl text-white hover:scale-125 transition-transform'
        >
          <FaBehance />
        </a>
      </div>

      {/* Header desktop */}
      {/* Header desktop */}
      <header className="hidden lg:flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Image
            src={iconDois}
            alt="Logo Dois Nove Meia"
            className="animate-pulseScale"
          />
        </div>

        <nav className="flex gap-5 font-lemonMilkLight rounded-full">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`hover:bg-purple-purpleOpacity transition-colors rounded-full px-2 py-2 duration-200 ${
                activeLink === item.label ? "bg-purple-purpleOpacity font-lemonMilkBold" : ""
              }`}
              onClick={() => handleLinkClick(item.label)}
            >
              {item.label} {/* ✅ Só o texto no desktop */}
            </a>
          ))}
        </nav>

        <div className="flex items-center bg-purple-brandPurle gap-4 px-4 py-3 rounded-full">
          <a
            href='https://www.linkedin.com/company/doisnovemeia-publicidade/?originalSubdomain=br'
            className='text-3xl text-white hover:scale-125 transition-transform'
          >
            <FaLinkedinIn />
          </a>
          <a
            href='https://www.facebook.com/Doisnovemeia?locale=pt_BR'
            className='text-3xl text-white hover:scale-125 transition-transform'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com/doisnovemeia/'
            className='text-3xl text-white hover:scale-125 transition-transform'
          >
            <FaInstagram />
          </a>
          <a
            href='https://www.behance.net/doisnovemeia?locale=pt_BR'
            className='text-3xl text-white hover:scale-125 transition-transform'
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
        } pt-20`} // pt-20 para descolar das redes sociais no topo
      >
        <div className="flex flex-col items-start gap-6 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-2 text-lg ${
                activeLink === item.label ? "text-purple-brandPurle font-lemonMilkBold" : "text-black"
              }`}
              onClick={() => handleLinkClick(item.label)}
            >
              {item.icon}
              {item.label}
            </a>
          ))}

        </div>
      </div>
    </>
  );
}
