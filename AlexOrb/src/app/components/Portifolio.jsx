"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaExternalLinkAlt, FaCode, FaLaptop, FaUsers } from "react-icons/fa";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const projects = [
    {
      category: "SITE INSTITUCIONAL",
      title: "Gamboa Ação",
      image: "/gamboa.png",
      link: "https://www.gamboaacao.org.br",
      type: "institucional",
      description: "Site institucional moderno com área administrativa e sistema de doações",
      tech: ["WordPress", "PHP", "MySQL"]
    },

    {
      category: "LANDING PAGE",
      title: "Guia Supremo",
      image: "guia-supremo.png",
      link: "https://guia-supremo-la.vercel.app",
      type: "landing",
      description: "Landing page de produto com design moderno e alta conversão",
      tech: ["React", "Next.js", "Tailwind"]
    },
        {
      category: "LANDING PAGE",
      title: "Educação Turbo",
      image: "educacao-turbo.png",
      link: "educacao-turbo-ia.vercel.app",
      type: "landing",
      description: "Landing page de produto com design moderno e alta conversão",
      tech: ["React", "Next.js", "Tailwind"]
    },
    {
      category: "SITE INSTITUCIONAL",
      title: "Clínica Med",
      image: "clinica-med.png",
      link: "https://clinica-med.vercel.app",
      type: "institucional",
      description: "Site institucional para clínica médica com agendamento e informações sobre serviços",
      tech: ["React", "Next.js", "CSS"]
    },
    {
      category: "SITE PROFISSIONAL",
      title: "Noabis Advocacia",
      image: "noabis.png",
      link: "https://noabis.vercel.app",
      type: "profissional",
      description: "Site profissional para escritório de advocacia com área de serviços e contato",
      tech: ["React", "Next.js", "Tailwind"]
    },
    {
      category: "SITE PROFISSIONAL",
      title: "Jaque Lash",
      image: "jaque-lash.png",
      link: "https://jaque-lash.vercel.app",
      type: "profissional",
      description: "Site profissional para especialista em aplicação de cílios com galeria e agendamento",
      tech: ["React", "Next.js", "CSS"]
    }
  ];

  const filterTabs = [
    { id: "todos", label: "Todos Projetos", icon: <FaLaptop />, count: projects.length },
    { id: "landing", label: "Landing Pages", icon: <FaCode />, count: projects.filter(p => p.type === "landing").length },
    { id: "institucional", label: "Institucionais", icon: <FaUsers />, count: projects.filter(p => p.type === "institucional").length },
    { id: "profissional", label: "Profissionais", icon: <FaUsers />, count: projects.filter(p => p.type === "profissional").length }
  ];

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="portifolio" className="relative bg-black text-white py-20 min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_#00FFFF]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_120px_#8B5CF6]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_80px_#32D74B]"></div>


      <div className="relative z-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 text-center mb-16">
          <h3 className="text-cyan-400 font-semibold text-2xl mt-20 tracking-widest drop-shadow-[0_0_10px_#00FFFF]">
            PROJETOS
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Conheça Nosso{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400  bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mais de 50 projetos entregues com excelência. Veja alguns dos nossos trabalhos mais recentes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border font-medium
                  ${activeFilter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_20px_#00FFFF30]'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                  }`}
              >
                <span className={`text-sm transition-colors ${
                  activeFilter === tab.id ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full transition-colors ${
                  activeFilter === tab.id 
                    ? 'bg-cyan-400/20 text-cyan-400' 
                    : 'bg-white/10 text-gray-400 group-hover:text-white'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 brightness-75 group-hover:brightness-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full backdrop-blur-sm border border-cyan-400/30">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Visit Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-[#6121ff]/20 text-[#6121ff] text-xs rounded border border-[#6121ff]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-white rounded-lg border border-white/10 hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 font-medium group-hover:shadow-[0_0_20px_#00FFFF20] flex items-center justify-center"
                  >
                    Visitar Projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Gostou do que viu? Vamos criar algo incrível juntos!
          </p>
          <Link
            to="formulario"
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-[0_0_30px_#00FFFF30] hover:shadow-[0_0_40px_#00FFFF50] hover:scale-105"
          >
            CRIAR MEU PROJETO
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}