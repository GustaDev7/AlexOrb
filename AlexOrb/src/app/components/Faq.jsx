"use client";
import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { FaGlobe, FaTools, FaCog, FaLaptopCode, FaCreditCard } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { 
    question: "Que tipos de sites o GustaDev desenvolve?", 
    answer: "Desenvolvo landing pages de alta conversão, sites institucionais, e-commerces, portfolios profissionais e sites personalizados para qualquer segmento de negócio.",
    icon: FaGlobe
  },
  { 
    question: "O GustaDev oferece suporte após a entrega do site?", 
    answer: "Sim! Ofereço suporte técnico completo, atualizações de conteúdo, backup automático e monitoramento para garantir que seu site funcione perfeitamente sempre.",
    icon: FaTools
  },
  { 
    question: "Como funciona o processo de criação do meu site?", 
    answer: "Processo simples em 4 etapas: 1) Briefing e planejamento, 2) Design e aprovação, 3) Desenvolvimento, 4) Entrega e treinamento. Você acompanha tudo de perto!",
    icon: FaCog
  },
  { 
    question: "Quais tecnologias o GustaDev utiliza?", 
    answer: "Trabalho com tecnologias modernas e seguras: React, Next.js, Tailwind CSS, Node.js, WordPress otimizado - sempre escolhendo a melhor solução para seu projeto.",
    icon: FaLaptopCode
  },
  { 
    question: "Quais são as formas de pagamento?", 
    answer: "Facilito ao máximo: Pix, transferência bancária, cartão de crédito (até 12x) e boleto. Projetos maiores podem ser parcelados conforme sua necessidade.",
    icon: FaCreditCard
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative py-16 sm:py-24 lg:py-32 flex items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24 mx-auto overflow-hidden">
      {/* Background complexo com gradientes e partículas */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
      
      {/* Grid animado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(97,33,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(97,33,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradiente de destaque */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl w-full flex flex-col lg:flex-row items-start gap-12">
        {/* Título e Descrição (Esquerda em telas grandes) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/3 text-center lg:text-left"
        >
          <div className="relative">
            {/* Ícone de destaque */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <FiHelpCircle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              FAQ
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-6">
              Dúvidas <br /> 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            
            {/* Linha decorativa animada */}
            <motion.div 
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto lg:mx-0 rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.2, delay: 0.5 }}
            ></motion.div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Tire suas dúvidas sobre nossos serviços de desenvolvimento de sites e comece seu projeto hoje mesmo.
            </p>
          </div>
        </motion.div>
        
        {/* Perguntas e Respostas */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-2/3 space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 ${
                openIndex === index 
                  ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/50 shadow-xl shadow-purple-500/20" 
                  : "bg-gray-900/50 border-gray-700/50 hover:border-purple-500/30 hover:bg-gray-800/50"
              }`}>
                
                {/* Efeito de brilho no hover */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                )}

                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-left transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500/5 group-hover:to-blue-500/5"
                >
                  <div className="flex items-center gap-4">
                    {/* Ícone React Icons */}
                    <div className={`p-2 rounded-full transition-all duration-300 ${
                      openIndex === index 
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-110" 
                        : "bg-gray-700 text-gray-300 group-hover:bg-gray-600 group-hover:text-white"
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    
                    <span className={`font-semibold text-lg transition-colors duration-300 ${
                      openIndex === index 
                        ? "text-purple-400" 
                        : "text-gray-200 group-hover:text-white"
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Ícone de expansão melhorado */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`transition-colors duration-300 ${
                        openIndex === index 
                          ? "text-purple-400" 
                          : "text-gray-400 group-hover:text-purple-400"
                      }`}
                    >
                      <FiChevronDown className="w-6 h-6" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="px-6 pb-6"
                      >
                        <div className="border-l-4 border-gradient-to-b from-purple-500 to-blue-500 pl-6">
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Efeito de luz ambiente */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>
      
      {/* Estilos CSS customizados */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </div>
  );
}