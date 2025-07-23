import { FaUserTie, FaRocket, FaCogs, FaChartLine, FaClock, FaShieldAlt } from "react-icons/fa";

const features = [
  { 
    icon: <FaUserTie className="text-cyan-400 text-4xl drop-shadow-[0_0_20px_#00FFFF]" />, 
    title: "Equipe Liberada Para o Estratégico", 
    description: "Seus colaboradores param de perder tempo com tarefas repetitivas e passam a focar no que realmente gera receita: relacionamento com clientes, estratégia e crescimento do negócio.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    neonColor: "cyan"
  },
  { 
    icon: <FaRocket className="text-purple-400 text-4xl drop-shadow-[0_0_20px_#8B5CF6]" />, 
    title: "Follow-up Automático Que Nunca Falha", 
    description: "Sistema inteligente que acompanha cada lead automaticamente, com sequências personalizadas de mensagens, lembretes e nutrição até a conversão. Zero leads esquecidos.",
    gradient: "from-purple-500/20 to-violet-500/20",
    neonColor: "purple"
  },
  { 
    icon: <FaCogs className="text-lime-400 text-4xl drop-shadow-[0_0_20px_#32D74B]" />, 
    title: "Processos Padronizados e Otimizados", 
    description: "Workflows automatizados que garantem que cada tarefa seja executada sempre da mesma forma, no tempo certo, por quem precisa fazer. Fim do retrabalho e da confusão.",
    gradient: "from-lime-500/20 to-green-500/20",
    neonColor: "lime"
  },
  { 
    icon: <FaChartLine className="text-cyan-400 text-4xl drop-shadow-[0_0_20px_#00FFFF]" />, 
    title: "Escalabilidade Sem Aumentar Custos", 
    description: "Atenda 3x mais clientes com a mesma equipe. Automação permite crescer receita sem multiplicar folha de pagamento, benefícios e custos de gerenciamento.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    neonColor: "cyan"
  },
  { 
    icon: <FaClock className="text-lime-400 text-4xl drop-shadow-[0_0_20px_#32D74B]" />, 
    title: "Resposta Instantânea Para Cada Lead", 
    description: "Sistema responde novos leads em menos de 60 segundos, 24h por dia. Aproveite os 80% de conversão que você está perdendo por demorar para responder.",
    gradient: "from-lime-500/20 to-green-500/20",
    neonColor: "lime"
  },
  { 
    icon: <FaShieldAlt className="text-purple-400 text-4xl drop-shadow-[0_0_20px_#8B5CF6]" />, 
    title: "Controle Total e Previsibilidade", 
    description: "Dashboards em tempo real mostram exatamente onde está cada processo, quantos leads entraram, converteram e qual o ROI de cada ação automática.",
    gradient: "from-purple-500/20 to-violet-500/20",
    neonColor: "purple"
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-black py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_#00FFFF]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_120px_#8B5CF6]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_80px_#32D74B]"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Título da Seção */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Como a Automação Transforma Cada um Desses Problemas em{" "}
            <span className="text-cyan-400">
              Vantagem Competitiva
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Veja o que acontece quando você para de fazer tudo manualmente:
          </p>
        </div>
       
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer
                bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-white/10 hover:border-white/30
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                ${feature.neonColor === 'cyan' ? 'hover:shadow-[0_0_30px_#00FFFF30]' : 
                  feature.neonColor === 'purple' ? 'hover:shadow-[0_0_30px_#8B5CF630]' : 
                  'hover:shadow-[0_0_30px_#32D74B30]'}`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                feature.neonColor === 'cyan' ? 'bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent' :
                feature.neonColor === 'purple' ? 'bg-gradient-to-r from-transparent via-purple-400/10 to-transparent' :
                'bg-gradient-to-r from-transparent via-lime-400/10 to-transparent'
              }`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/15 transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative line */}
        <div className="mt-16 w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-lime-500 rounded-full shadow-[0_0_20px_#00FFFF50]"></div>
      </div>
    </section>
  );
}