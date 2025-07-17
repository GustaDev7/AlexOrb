"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center text-center bg-black min-h-screen text-claro px-6 py-16 overflow-hidden">
      
      {/* Grid de fundo cyber */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#7F4DFF]/5 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(127,77,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(127,77,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#7F4DFF] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Luzes cyber interativas */}
      <div 
        className="absolute w-[800px] h-[800px] bg-gradient-radial from-[#7F4DFF]/20 via-[#B794FF]/10 to-transparent rounded-full blur-3xl transition-all duration-1000"
        style={{
          left: `${mousePosition.x * 0.3}%`,
          top: `${mousePosition.y * 0.3}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-[#9D6FFF]/15 via-transparent to-transparent rounded-full blur-3xl transition-all duration-700"
        style={{
          right: `${mousePosition.x * 0.2}%`,
          bottom: `${mousePosition.y * 0.2}%`,
          transform: 'translate(50%, 50%)'
        }}
      />

          {/* Badge cyber */}
          <div className="inline-flex mt-10 items-center gap-2 px-4 py-2 bg-[#7F4DFF]/10 border border-[#7F4DFF]/30 rounded-full text-sm font-medium text-[#B794FF] backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#7F4DFF] rounded-full animate-pulse"></div>
            Tecnologia de Ponta
          </div>
      {/* Luzes animadas originais */}
      <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 w-[500px] h-[600px] bg-principal rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-[400px] h-[300px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luzDelay pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[300px] h-[200px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
      <div className="absolute bottom-[5%] left-[50%] transform -translate-x-1/2 w-[400px] h-[300px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luzDelay pointer-events-none z-0" />
      
      {/* Mockup original */}
      <div className="w-full max-w-lg z-10 relative">
        <img
          src="mockup.png"
          alt="Mockup de site"
          className="w-full h-auto object-cover animate-[float_6s_ease-in-out_infinite] transition-transform duration-500 hover:scale-105"
          style={{
            animationName: 'float',
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
          }}
        />
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>
      </div>

      {/* Conteúdo original */}
      <div className="max-w-2xl mt-2 z-10 space-y-6">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Cansado de Sites que <span className="text-principal">Não Trazem</span> Resultados?
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Criamos sites que realmente trabalham para você: <span className="text-principal">otimizados para conversão</span>, carregamento rápido e experiência perfeita em qualquer dispositivo. Seu investimento, nosso compromisso com resultados.
        </p>
        <Link
          to="formulario"
          smooth={true}
          duration={500}
          className="btn mt-6 px-6 py-3 rounded-md w-full transition duration-300 ease-in-out font-semibold hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2">
          Solicitar Proposta Gratuita
        </Link>
      </div>


      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}