"use client";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Footer() {
  const menuItems = [
    { name: "Início", href: "hero" },
    { name: "Recursos", href: "features" },
    { name: "Portfólio", href: "portifolio" },
    { name: "Público-Alvo", href: "publico-alvo" },
    { name: "Contato", href: "formulario" },
  ];

  return (
    <footer className="relative bg-slate-950 text-white">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
      </div>

      {/* Grid de pontos discreto */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Conteúdo principal */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo e descrição */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
           
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
              Desenvolvemos soluções digitais que transformam ideias em resultados concretos para seu negócio.
            </p>
            
            {/* Redes sociais */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/os3jovens/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 group border border-slate-700 hover:border-slate-600"
              >
                <FaInstagram className="text-slate-400 group-hover:text-white transition-colors" />
              </motion.a>
              
              <motion.a
                href="https://wa.link/3u5tn2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 group border border-slate-700 hover:border-slate-600"
              >
                <FaWhatsapp className="text-slate-400 group-hover:text-white transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Navegação */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Informações de contato */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="text-slate-400 text-sm">
                <p>Entre em contato para discutir</p>
                <p>seu próximo projeto digital</p>
              </div>
              
              <motion.a
                href="https://wa.link/3u5tn2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-principal  rounded-lg text-white text-sm font-medium transition-all duration-300"
              >
                <FaWhatsapp className="text-base" />
                Iniciar conversa
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-slate-800"
        >
          <div className="py-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-500 text-sm"
            >
              © 2025 3 Jovens. Todos os direitos reservados.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}