"use client";

import { motion } from "framer-motion";
import HeroEFarmLogo from "../components/HeroEFarmLogo";

export default function HeroEFarm() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 🔹 Efeito de Luz de Fundo (Cores do Logo) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-farmGreen/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-farmSoil/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* 📝 TEXTO E CALL TO ACTION */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-farmGreen/10 border border-farmGreen/30 text-farmLeaf text-xs font-bold uppercase tracking-wider mb-6">
            Da Terra para a Mesa • Impacto Social
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Alimentando o <span className="text-farmGreen">Mundo</span>, Cultivando <span className="text-farmGold">Esperança</span>.
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            Na <span className="text-white font-semibold">E-Farm+</span>, unimos tecnologia agrícola e pecuária para abastecer mercados corporativos e sustentar nossos projetos sociais <span className="text-farmLeaf">(E-Social)</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-farmGreen text-white font-bold rounded-xl hover:bg-farmGreen/80 transition-all shadow-lg shadow-farmGreen/20">
              Nossas Fazendas
            </button>
            <button className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Projetos Sociais
            </button>
          </div>
        </motion.div>

        {/* 🖼️ ELEMENTO VISUAL (CARDS DE IMPACTO) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4"
        >
<HeroEFarmLogo/>

          {/* Card Agricultura */}
          <div className="p-6 bg-gradient-to-br from-farmGreen/20 to-transparent border border-white/10 rounded-3xl backdrop-blur-md mt-10">
            <div className="text-4xl mb-4">🚜</div>
            <h3 className="text-xl font-bold text-white mb-2">Agricultura</h3>
            <p className="text-sm text-gray-400">Produção sustentável de cereais e hortícolas.</p>
          </div>

          {/* Card Pecuária */}
          <div className="p-6 bg-gradient-to-br from-farmSoil/20 to-transparent border border-white/10 rounded-3xl backdrop-blur-md">
            <div className="text-4xl mb-4">🐄</div>
            <h3 className="text-xl font-bold text-white mb-2">Pecuária</h3>
            <p className="text-sm text-gray-400">Criação de gado com os mais altos padrões.</p>
          </div>

          {/* Card Avicultura (Frango) */}
<div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 rounded-3xl backdrop-blur-md">
  <div className="text-4xl mb-4">🐔</div>
  <h3 className="text-xl font-bold text-white mb-2">Avicultura</h3>
  <p className="text-sm text-gray-400">
    Produção avícola de alta linhagem para o abastecimento da rede EdenKingDom.
  </p>
</div>

{/* Card Piscicultura (Criação de Peixes) */}
<div className="col-span-2 p-6 bg-gradient-to-r from-blue-500/10 to-transparent border border-white/10 rounded-3xl backdrop-blur-md flex items-center gap-6">
  <div className="text-5xl">🐟</div>
  <div>
    <h3 className="text-xl font-bold text-blue-400 mb-1">Piscicultura Sustentável</h3>
    <p className="text-sm text-gray-400 font-medium">
      Produção de pescado em sistemas controlados para garantir proteína de qualidade e baixo impacto ambiental.
    </p>
  </div>
</div>


          {/* Card Impacto Social (E-Rise/Hope) */}
          <div className="col-span-2 p-6 bg-gradient-to-r from-farmGold/10 to-transparent border border-white/10 rounded-3xl backdrop-blur-md flex items-center gap-6">
            <div className="text-5xl">🤝</div>
            <div>
              <h3 className="text-xl font-bold text-farmGold mb-1">E-Rise & E-Hope</h3>
              <p className="text-sm text-gray-400 font-medium">Capacitação e reintegração de indivíduos através do trabalho na terra.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
