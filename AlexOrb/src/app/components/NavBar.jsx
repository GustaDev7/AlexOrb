"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para adicionar efeito
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Impede a rolagem quando o menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#010101]/95 backdrop-blur-lg shadow-2xl py-3' 
        : 'bg-[#010101]/80 backdrop-blur-md shadow-lg py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo com efeito gradient */}
        <div className="relative group">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#7F4DFF] via-[#9D6FFF] to-[#B794FF] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            GustaDev
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7F4DFF] to-[#B794FF] group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Ícone do Menu com animação */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="relative w-7 h-7">
            <AiOutlineMenu 
              size={28} 
              className={`absolute transition-all duration-300 ${
                menuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`}
            />
            <AiOutlineClose 
              size={28} 
              className={`absolute transition-all duration-300 ${
                menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
              }`}
            />
          </div>
        </button>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex gap-8 text-base">
          {menuItems.map((item, index) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                className="text-white/90 hover:text-white cursor-pointer transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/5 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F4DFF]/20 to-[#B794FF]/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7F4DFF] to-[#B794FF] group-hover:w-full transition-all duration-300"></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-[#010101]/95 backdrop-blur-lg flex flex-col items-center justify-center transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-out`}
      >
        {/* Efeito de partículas de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#7F4DFF]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#B794FF]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-[#9D6FFF]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Botão de Fechar */}
        <button
          className="absolute top-6 right-6 text-white p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-90"
          onClick={() => setMenuOpen(false)}
        >
          <AiOutlineClose size={28} />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col items-center gap-8 z-10">
          {menuItems.map((item, index) => (
            <li 
              key={item.name}
              className={`transform transition-all duration-500 ${
                menuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: menuOpen ? `${index * 100 + 200}ms` : '0ms'
              }}
            >
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                className="text-2xl font-medium text-white/90 hover:text-white cursor-pointer transition-all duration-300 px-6 py-3 rounded-xl hover:bg-white/5 relative group overflow-hidden"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F4DFF]/20 to-[#B794FF]/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7F4DFF] to-[#B794FF] group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Decoração inferior */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-1 bg-gradient-to-r from-[#7F4DFF] to-[#B794FF] rounded-full"></div>
        </div>
      </div>
    </nav>
  );
}

const menuItems = [
  { name: "Início", href: "hero" },
  { name: "Recursos", href: "features" },
  { name: "Portfólio", href: "portifolio" },
  { name: "Público-Alvo", href: "publico-alvo" },
  { name: "Contato", href: "formulario" },
];