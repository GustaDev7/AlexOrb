"use client";
import { useRef, useState, useEffect } from "react";

// Componente do fundo interativo com partículas melhorado
function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");

    let width = parent.clientWidth;
    let height = parent.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 150;
    
    // Partículas com diferentes tamanhos e velocidades
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.7 ? '#6121ff' : '#4f46e5',
        pulse: Math.random() * 0.02 + 0.01,
        pulseDirection: 1
      });
    }

    let animationFrameId;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Pulsing effect
        p.opacity += p.pulse * p.pulseDirection;
        if (p.opacity > 0.6 || p.opacity < 0.1) {
          p.pulseDirection *= -1;
        }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = `${p.color}${Math.floor(p.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [focusedField, setFocusedField] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setMessageType("");

    try {
      const res = await fetch("https://3jovensapi.vercel.app/enviar-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (data.success) {
        setResponseMessage("Dados enviados com sucesso!");
        setMessageType("success");
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          mensagem: "",
        });
      } else {
        setResponseMessage("Erro: " + data.error);
        setMessageType("error");
      }
    } catch (error) {
      setResponseMessage("Erro ao enviar dados: " + error.message);
      setMessageType("error");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResponseMessage("");
        setMessageType("");
      }, 5000);
    }
  }

  const messageClasses =
    messageType === "success"
      ? "bg-green-100 border-green-500 text-green-800"
      : messageType === "error"
      ? "bg-red-100 border-red-500 text-red-800"
      : "";

  return (
    <div
      id="formulario"
      className="relative bg-gradient-to-br from-black via-slate-950 to-black border-t-2 border-transparent min-h-screen text-[#f5f5f5] py-16 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center mx-auto space-y-8"
      style={{
        borderImage: 'linear-gradient(to left, #000000, #6121ff)',
        borderImageSlice: 1,
      }}
    >
      <InteractiveBackground />
      
      {/* Título com animação */}
      <div className="relative z-10 w-full max-w-2xl text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 opacity-0 animate-fade-in">
          Vamos Criar o Seu Site{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Personalizado
          </span>
        </h2>
        <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed opacity-0 animate-fade-in-delay">
          Preencha os campos abaixo para que possamos entrar em contato e
          começar a criar o site dos seus sonhos. Não perca a chance de levar
          sua presença online para o próximo nível!
        </p>
      </div>

      {/* Formulário com glassmorphism */}
      <div className="relative z-10 w-full max-w-xl">
        <div 
          className="backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 100px rgba(97, 33, 255, 0.2)'
          }}
        >
          <div className="space-y-6">
            {/* Campo Nome */}
            <div className="relative group">
              <input
                id="nome"
                type="text"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
                onFocus={() => setFocusedField("nome")}
                onBlur={() => setFocusedField("")}
                className="w-full p-4 rounded-xl bg-transparent text-white border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-purple-400/50 placeholder-gray-400"
                required
              />
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                focusedField === "nome" ? "shadow-lg shadow-purple-500/30" : ""
              }`}></div>
            </div>

            {/* Campo Email */}
            <div className="relative group">
              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                className="w-full p-4 rounded-xl bg-transparent text-white border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-purple-400/50 placeholder-gray-400"
                required
              />
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                focusedField === "email" ? "shadow-lg shadow-purple-500/30" : ""
              }`}></div>
            </div>

            {/* Campo WhatsApp */}
            <div className="relative group">
              <input
                id="whatsapp"
                type="tel"
                placeholder="Digite seu WhatsApp"
                value={formData.whatsapp}
                onChange={handleChange}
                onFocus={() => setFocusedField("whatsapp")}
                onBlur={() => setFocusedField("")}
                className="w-full p-4 rounded-xl bg-transparent text-white border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-purple-400/50 placeholder-gray-400"
                required
              />
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                focusedField === "whatsapp" ? "shadow-lg shadow-purple-500/30" : ""
              }`}></div>
            </div>

            {/* Campo Mensagem */}
            <div className="relative group">
              <textarea
                id="mensagem"
                placeholder="Conte um pouco sobre o seu projeto"
                value={formData.mensagem}
                onChange={handleChange}
                onFocus={() => setFocusedField("mensagem")}
                onBlur={() => setFocusedField("")}
                className="w-full p-4 rounded-xl bg-transparent text-white border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-purple-400/50 placeholder-gray-400 resize-none"
                rows="4"
                required
              ></textarea>
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                focusedField === "mensagem" ? "shadow-lg shadow-purple-500/30" : ""
              }`}></div>
            </div>

            {/* Botão Submit */}
            <button 
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 mt-6 px-6 py-4 rounded-xl transition-all duration-300 ease-in-out font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </div>
              ) : (
                "Quero Criar Meu Site!"
              )}
            </button>
          </div>

          {/* Mensagem de resposta */}
          {responseMessage && (
            <div className={`mt-6 p-4 rounded-xl border-2 transition-all duration-300 ${messageClasses}`}>
              {responseMessage}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </div>
  );
}