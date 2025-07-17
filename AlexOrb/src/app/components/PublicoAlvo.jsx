"use client"

import { Link } from "react-scroll";
import { BiBriefcase, BiBook, BiBuilding, BiCapsule } from "react-icons/bi";

const features = [
  {
    icon: <BiBriefcase className="text-principal text-5xl drop-shadow-[0_0_10px_]" />,
    title: "Autônomos",
    description: "Se você é advogado, designer, médico, dentista, nutricionista ou atua de forma independente, uma plataforma profissional pode ampliar sua presença digital, atrair mais clientes e fortalecer sua autoridade no mercado."
  },
  {
    icon: <BiBook className="text-lime-400 text-5xl drop-shadow-[0_0_10px_#5CF559]" />,
    title: "Infoprodutores",
    description: "Para quem busca páginas de alta performance com design estratégico para impulsionar vendas e captar leads, seja para lançamentos ou estratégias de venda perpétua."
  },
  {
    icon: <BiBuilding className="text-[#7F4DFF] text-5xl drop-shadow-[0_0_10px_#7F4DFF]" />,
    title: "Empresas e Negócios",
    description: "Transforme sua empresa com uma plataforma digital robusta, otimizada para gerar mais visibilidade, fortalecer a marca e impulsionar as vendas no ambiente online."
  },
  {
    icon: <BiCapsule className="text-claro text-5xl drop-shadow-[0_0_10px_#9e9e9e]" />,
    title: "E-commerce",
    description: "Soluções personalizadas para quem vende produtos físicos ou digitais, garantindo uma experiência de compra otimizada e conversões elevadas."
  },
];

export default function FeaturesSection() {
  return (
       <section id="publico-alvo" className="relative bg-black py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-gray-900/50"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-lime-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-750"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Container principal */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400 font-medium text-sm tracking-wide">NOSSO PÚBLICO</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Para quem são nossas{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-lime-400 bg-clip-text text-transparent">
              soluções?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Desenvolvemos soluções digitais personalizadas para diferentes tipos de negócios, 
            sempre focando em resultados e experiência do usuário.
          </p>
        </div>
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white w-full">
          {features.map((feature, index) => (
            <div key={index} className="card flex flex-col items-center text-left p-6 rounded-xl shadow-lg relative">
              <div className="selector flex items-center justify-center w-16 h-16 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-center text-md">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Botão Centralizado */}
        <div className="mt-12">
          <Link
            to="formulario"
            smooth={true}
            duration={500}
            className="btn mt-6 px-6 py-3 rounded-md transition duration-300 ease-in-out font-semibold hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2">
            Solicite um orçamento!
          </Link>
        </div>

      </div>
    </section>
  );
}
