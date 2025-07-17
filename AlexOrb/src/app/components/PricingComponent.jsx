"use client";

import React, { useState } from 'react';
import { FaCheck, FaStar, FaBolt, FaCrown, FaRocket, FaDesktop, FaShoppingCart } from 'react-icons/fa';

const PricingComponent = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Básico",
      icon: <FaDesktop className="w-6 h-6" />,
      price: isAnnual ? 497 : 97,
      originalPrice: isAnnual ? 597 : 127,
      period: isAnnual ? "/ano" : "/mês",
      description: "Ideal para pequenos negócios e freelancers",
      features: [
        "Site responsivo de até 5 páginas",
        "Design moderno e profissional",
        "Otimização para SEO básico",
        "Formulário de contato",
        "Integração com redes sociais",
        "Suporte por email",
        "1 revisão incluída"
      ],
      popular: false,
      gradient: "from-gray-800 to-gray-900"
    },
    {
      name: "Profissional",
      icon: <FaRocket className="w-6 h-6" />,
      price: isAnnual ? 897 : 197,
      originalPrice: isAnnual ? 1197 : 247,
      period: isAnnual ? "/ano" : "/mês",
      description: "Perfect para empresas em crescimento",
      features: [
        "Site responsivo de até 10 páginas",
        "Design personalizado e único",
        "Otimização SEO avançada",
        "Sistema de blog integrado",
        "Análise de performance",
        "Suporte prioritário",
        "3 revisões incluídas",
        "Certificado SSL grátis"
      ],
      popular: true,
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      name: "Premium",
      icon: <FaShoppingCart className="w-6 h-6" />,
      price: isAnnual ? 1497 : 297,
      originalPrice: isAnnual ? 1897 : 397,
      period: isAnnual ? "/ano" : "/mês",
      description: "Solução completa para grandes projetos",
      features: [
        "Site responsivo ilimitado",
        "E-commerce completo",
        "Painel administrativo",
        "Integração com sistemas",
        "Suporte 24/7",
        "Manutenção mensal",
        "Revisões ilimitadas",
        "Hospedagem premium inclusa",
        "Backup automático"
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Planos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Criação</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforme sua presença digital com sites profissionais que convertem visitantes em clientes. 
            Mais de 50 projetos entregues com excelência.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700">
            <div className="flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  !isAnnual 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                  isAnnual 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Anual
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-cyan-500/25 shadow-2xl' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.gradient} mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-500 line-through text-sm">R$ {plan.originalPrice}</span>
                  <span className="text-green-400 text-sm font-medium">
                    Economize R$ {plan.originalPrice - plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/25'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos criar algo incrível juntos! Entre em contato e transforme sua ideia em realidade digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Criar Meu Projeto
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;