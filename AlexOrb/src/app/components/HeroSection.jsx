"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-scroll";

// Constantes para otimização
const MOUSE_THROTTLE = 32; // ~30fps para suavidade
const PARTICLE_COUNT = 8; // Reduzido para mobile
const ANIMATION_DURATION = {
  MOUSE: 300,
  LIGHTS: 700,
  FAST_LIGHTS: 1000
};

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detecta dispositivos mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Intersection Observer para carregar efeitos apenas quando visível
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const heroElement = document.getElementById('hero');
    if (heroElement) observer.observe(heroElement);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (heroElement) observer.unobserve(heroElement);
    };
  }, []);

  // Mouse movement handler otimizado com throttle
  const handleMouseMove = useCallback((e) => {
    if (isMobile) return; // Desabilita em mobile
    
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, [isMobile]);

  // Effect para mouse movement com throttle
  useEffect(() => {
    if (isMobile) return;
    
    let timeoutId;
    const throttledMouseMove = (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), MOUSE_THROTTLE);
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      clearTimeout(timeoutId);
    };
  }, [handleMouseMove, isMobile]);

  // Memoiza partículas para evitar re-renders
  const particles = useMemo(() => {
    const count = isMobile ? Math.floor(PARTICLE_COUNT / 2) : PARTICLE_COUNT;
    
    return [...Array(count)].map((_, i) => (
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
    ));
  }, [isMobile]);

  // Memoiza estilos de transform para evitar recálculos
  const gridTransform = useMemo(() => ({
    transform: !isMobile ? 
      `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` : 
      'translate(0, 0)',
    transition: `transform ${ANIMATION_DURATION.MOUSE}ms ease-out`
  }), [mousePosition, isMobile]);

  const lightStyles = useMemo(() => ({
    primary: {
      left: !isMobile ? `${mousePosition.x * 0.3}%` : '50%',
      top: !isMobile ? `${mousePosition.y * 0.3}%` : '50%',
      transform: 'translate(-50%, -50%)',
      transition: `all ${ANIMATION_DURATION.FAST_LIGHTS}ms ease-out`
    },
    secondary: {
      right: !isMobile ? `${mousePosition.x * 0.2}%` : '50%',
      bottom: !isMobile ? `${mousePosition.y * 0.2}%` : '50%',
      transform: 'translate(50%, 50%)',
      transition: `all ${ANIMATION_DURATION.LIGHTS}ms ease-out`
    }
  }), [mousePosition, isMobile]);

  // Componente Badge memoizado
  const Badge = useMemo(() => (
    <div className="inline-flex mt-10 items-center gap-2 px-4 py-2 bg-[#7F4DFF]/10 border border-[#7F4DFF]/30 rounded-full text-sm font-medium text-[#B794FF] backdrop-blur-sm">
      <div className="w-2 h-2 bg-[#7F4DFF] rounded-full animate-pulse"></div>
      Tecnologia de Ponta
    </div>
  ), []);

  // Componente Mockup otimizado
  const MockupImage = useMemo(() => (
    <div className="w-full max-w-lg z-10 relative">
      <img
        src="mockup.png"
        alt="Mockup de site"
        className="w-full h-auto object-cover animate-float transition-transform duration-500 hover:scale-105"
        loading="eager"
        decoding="async"
      />
    </div>
  ), []);

  return (
    <section id="hero" className="relative flex flex-col items-center text-center bg-black min-h-screen text-claro px-6 py-16 overflow-hidden">
      
      {/* Grid de fundo cyber - carregado apenas quando visível */}
      {isVisible && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#7F4DFF]/5 to-transparent"></div>
          <div 
            className="absolute inset-0 bg-[linear-gradient(rgba(127,77,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(127,77,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
            style={gridTransform}
          ></div>
        </div>
      )}

      {/* Partículas flutuantes - quantidade reduzida em mobile */}
      {isVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {particles}
        </div>
      )}

      {/* Luzes cyber interativas - desabilitadas em mobile */}
      {isVisible && !isMobile && (
        <>
          <div 
            className="absolute w-[800px] h-[800px] bg-gradient-radial from-[#7F4DFF]/20 via-[#B794FF]/10 to-transparent rounded-full blur-3xl"
            style={lightStyles.primary}
          />
          <div 
            className="absolute w-[600px] h-[600px] bg-gradient-radial from-[#9D6FFF]/15 via-transparent to-transparent rounded-full blur-3xl"
            style={lightStyles.secondary}
          />
        </>
      )}

      {Badge}

      {/* Luzes animadas originais - otimizadas para mobile */}
      {isVisible && (
        <>
          <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 w-[500px] h-[600px] bg-principal rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
          <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-[400px] h-[300px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luzDelay pointer-events-none z-0" />
          <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[300px] h-[200px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
          <div className="absolute bottom-[5%] left-[50%] transform -translate-x-1/2 w-[400px] h-[300px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luzDelay pointer-events-none z-0" />
        </>
      )}
      
      {MockupImage}

      {/* Conteúdo otimizado */}
      <div className="max-w-2xl mt-2 z-10 space-y-6">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Sua Equipe Perdendo Tempo com <span className="text-principal">Tarefas Repetitivas</span> ao Invés de <span className="text-principal">Crescer</span> o Negócio?
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Desenvolvemos automações personalizadas que <span className="text-principal">liberam sua equipe das tarefas manuais</span>, aumentam a produtividade em até 300% e direcionam o foco para atividades que realmente fazem seu negócio crescer.
        </p>
        <Link
          to="formulario"
          smooth={true}
          duration={500}
          className="btn mt-6 px-6 py-3 rounded-md w-full transition duration-300 ease-in-out font-semibold hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2">
          SOLICITAR PROPOSTA GRATUITA
        </Link>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Otimizações para mobile */
        @media (max-width: 1024px) {
          .animate-luz,
          .animate-luzDelay {
            animation-duration: 4s;
          }
          
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }
      `}</style>
    </section>
  );
}