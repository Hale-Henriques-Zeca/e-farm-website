"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Doações Realizadas", value: "10k+", suffix: " Toneladas" },
  { label: "Pessoas Apoiadas", value: "50k+", suffix: "" },
  { label: "Províncias em Moçambique", value: "11", suffix: "" },
];

export default function HumanitarianImpact() {
  return (
    <section id="humanitario" className="py-24 relative overflow-hidden bg-farm-black">
      {/* 🔹 Efeito de fundo vermelho/terra para simbolizar Moçambique */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-farm-soil/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* 🖼️ LADO VISUAL (CONCEITO DE AJUDA) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-farm-soil/5 flex items-center justify-center group">
              {/* Overlay de Gradiente do Logo */}
              <div className="absolute inset-0 bg-farm-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="text-center p-8">
                <span className="text-6xl mb-6 block">🇲🇿</span>
                <h3 className="text-2xl font-bold text-white mb-4">Moçambique em Foco</h3>
                <p className="text-gray-400">
                  Resposta rápida a catástrofes naturais e crises alimentares através da logística da E-Farm+.
                </p>
              </div>
            </div>
            
            {/* Badge Flutuante */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-farm-gold rounded-2xl shadow-xl shadow-farm-gold/20 hidden md:block">
              <p className="text-farm-black font-black text-xl uppercase tracking-tighter">Impacto Global</p>
            </div>
          </motion.div>

          {/* 📝 CONTEÚDO TEXTUAL */}
          <div>
            <h2 className="text-farm-gold font-bold uppercase tracking-widest text-sm mb-4">E-Social Humanitário</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Mais que Alimento, <br /> Entregamos Dignidade.</h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              A **E-Farm+** é o braço produtivo das nossas missões humanitárias. Em momentos de crise, mobilizamos nossa infraestrutura para garantir que produtos frescos cheguem onde mais se precisa, apoiando a reconstrução de comunidades afetadas por desastres em Moçambique.
            </p>

            {/* Números do Impacto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-farm-leaf pl-4">
                  <p className="text-3xl font-black text-white">{stat.value}<span className="text-sm text-farm-leaf">{stat.suffix}</span></p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 🌍 DIVISÃO MUNDO (E-Hope Global) */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 text-center">
          <h4 className="text-xl font-bold text-white mb-4">Expansão E-Hope Global</h4>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Nossa visão ultrapassa fronteiras. O modelo de produção integrada da EdenKingDom está a ser preparado para ser replicado em outras regiões em crise ao redor do mundo.
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-farm-green" />
            <div className="w-2 h-2 rounded-full bg-farm-gold" />
            <div className="w-2 h-2 rounded-full bg-farm-soil" />
          </div>
        </div>
      </div>
    </section>
  );
}
