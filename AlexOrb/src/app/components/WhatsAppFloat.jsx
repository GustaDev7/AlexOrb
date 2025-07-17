"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaComments } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [notifications, setNotifications] = useState(3);
  const [showTooltip, setShowTooltip] = useState(false);

  // Simula notificações animadas
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => prev > 0 ? prev - 1 : 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mostra tooltip após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vim através do site e gostaria de saber mais sobre os serviços.");
    const phone = "5511999999999"; // Substitua pelo seu número
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const quickMessages = [
    {
      text: "Quero saber sobre preços",
      message: "Olá! Gostaria de conhecer os planos e preços disponíveis."
    },
    {
      text: "Preciso de suporte",
      message: "Olá! Preciso de ajuda com suporte técnico."
    },
    {
      text: "Quero uma demonstração",
      message: "Olá! Gostaria de agendar uma demonstração do produto."
    }
  ];

  const sendQuickMessage = (message) => {
    const phone = "5511999999999";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="absolute bottom-20 right-0 mb-2 animate-bounce">
          
        </div>
      )}

      {/* Quick Messages Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 mb-2 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-80 border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                  <RiCustomerService2Fill className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Suporte</h3>
                  <div className="flex items-center text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                    Online agora
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-lg"
              >
                <FaTimes />
              </button>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600 mb-3">Como podemos ajudar?</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendQuickMessage(msg.message)}
                  className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-sm text-gray-700 hover:text-gray-900"
                >
                  {msg.text}
                </button>
              ))}
            </div>

            {/* Custom Message Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center"
            >
              <FaComments className="mr-2" />
              Enviar mensagem personalizada
            </button>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        >
          <FaWhatsapp className="w-7 h-7" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></div>
        </button>

        {/* Notification Badge */}
        {notifications > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
            {notifications}
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}