"use client";

import { useState, useEffect, useRef } from "react";
// Importação atualizada para usar react-icons (Font Awesome)
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
  FaPlay,
  FaPause,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Adam Elias",
    image: "./Logotipo.png",
    text: "A 3 Jovens transformou nossa comunicação digital! Desde o redesign do nosso site até o aumento da nossa presença nas redes sociais, tivemos um crescimento significativo. Eles são extremamente profissionais e criativos, superando nossas expectativas.",
    rating: 5,
    company: "Tech Solutions",
    role: "CEO",
  },
  {
    name: "Lorrane Azevedo",
    image: "./lorranee.png",
    text: "O trabalho da 3 Jovens foi fundamental para nossa estratégia digital. Eles entenderam exatamente o que precisávamos e entregaram resultados excepcionais. Graças a eles, conseguimos aumentar nosso engajamento nas redes sociais em mais de 40%!",
    rating: 5,
    company: "Marketing Pro",
    role: "Diretora de Marketing",
  },
  {
    name: "Tâmara Lustosa",
    image: "./Logotipo.png",
    text: "Com a 3 Jovens, conseguimos alcançar mais pessoas e crescer nossa marca! O trabalho deles com o design e a criação de conteúdo realmente nos ajudou a nos destacar no mercado. Estamos muito satisfeitos com os resultados e continuaremos a parceria!",
    rating: 5,
    company: "Brand Design",
    role: "Fundadora",
  },
  {
    name: "Gamboa Ação",
    image: "./gmbe.png",
    text: "A 3 Jovens trouxe soluções inovadoras para nosso negócio, sempre atentos às nossas necessidades. A equipe é muito dedicada e criativa, e conseguimos ver uma grande diferença na qualidade do nosso site e nas conversões de vendas. Super recomendo!",
    rating: 5,
    company: "E-commerce Plus",
    role: "Gestor de Vendas",
  },
  {
    name: "Cetma Educacional",
    image: "./Logotipo.png",
    text: "A parceria com a 3 Jovens foi crucial para expandirmos nossas operações online. Eles nos ajudaram a criar uma plataforma robusta e fácil de usar, além de melhorar nosso marketing digital. O suporte que recebemos foi sempre ágil e eficiente.",
    rating: 5,
    company: "Educação Online",
    role: "Diretor Pedagógico",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  // Configurações do autoplay
  const autoplayDuration = 5000; // 5 segundos
  const progressStep = 100 / (autoplayDuration / 50); // Atualiza a cada 50ms

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + progressStep;
        });
      }, 50);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-black via-slate-950 to-black border-t-2 border-transparent py-16 text-white relative overflow-hidden">
      {/* Partículas de fundo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header com controles */}
      <div className="relative z-10 flex flex-col items-center mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-purple-400 border border-purple-400 rounded-full px-6 py-2 font-semibold text-lg tracking-wider backdrop-blur-sm bg-purple-500/10">
            DEPOIMENTOS
          </span>
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {/* Ícones de Play/Pause trocados */}
            {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
          </button>
        </div>

        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Veja o que estão falando da 3Jovens
        </h2>

        {/* Barra de progresso */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Carrossel principal */}
      <div className="relative w-full max-w-7xl px-6">
        <div className="flex items-center justify-center gap-6 min-h-[400px]">
          {/* Botão anterior */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Depoimento anterior"
          >
            {/* Ícone ChevronLeft trocado */}
            <FaChevronLeft size={24} />
          </button>

          {/* Cards de depoimentos */}
          <div className="flex gap-6 flex-1 justify-center">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`relative transition-all duration-500 ${
                  index === 1 ? "scale-105 z-10" : "scale-95 opacity-70"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-80 h-96 rounded-2xl backdrop-blur-md border border-purple-500/20 overflow-hidden group">
                  {/* Fundo com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

                  {/* Efeito de hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition-opacity duration-300 ${
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Ícone de aspas */}
                    <div className="flex justify-center mb-4">
                      {/* Ícone Quote trocado */}
                      <FaQuoteLeft className="text-purple-400" size={32} />
                    </div>

                    {/* Header do cliente */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-purple-400 object-cover"
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%236121ff'/%3E%3Ctext x='32' y='40' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3E%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-purple-300 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Avaliação */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          // Ícone Star trocado
                          <FaStar
                            key={i}
                            size={18}
                            className="text-yellow-400"
                          />
                        )
                      )}
                    </div>

                    {/* Texto do depoimento */}
                    <div className="flex-1 overflow-hidden">
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-6">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão próximo */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Próximo depoimento"
          >
            {/* Ícone ChevronRight trocado */}
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="flex justify-center mt-4">
          <span className="text-gray-400 text-sm">
            {currentIndex + 1} de {testimonials.length}
          </span>
        </div>
      </div>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}