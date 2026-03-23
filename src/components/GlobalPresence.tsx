"use client";

import { motion } from "framer-motion";
import { Globe, Loader2, MapPin } from "lucide-react";

const locations = [
  { country: "Moçambique", city: "Nhamatanda", role: "Representatividade", color: "bg-farm-green" },
  { country: "Canadá", city: "Toronto", role: "Extracurricular", color: "bg-farm-gold" },
  { country: "USA", city: "Nova Iorque", role: "Sede Global", color: "bg-farm-soil" },
];

export default function GlobalPresence () {
  return (
    <section className="py-24 bg-farm-black/30 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* 📝 ESQUERDA: LISTA DE ESCRITÓRIOS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-farm-leaf font-bold uppercase tracking-widest text-sm mb-4">Alcance Internacional</h2>
            <h3 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Globe className="text-farm-gold animate-pulse" /> Presença Global
            </h3>
            
            <div className="space-y-6">
              {locations.map((loc, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className={`mt-1.5 w-3 h-3 rounded-full ${loc.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-farm-gold transition-colors">
                      {loc.country}
                    </h4>
                    <p className="text-gray-400 text-sm italic">{loc.city} — {loc.role}</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-farm-leaf animate-spin" />
                <p className="text-sm text-gray-500 italic">
                  Expansão contínua em nossas instalações educacionais globais (ESS)...
                </p>
              </div>
            </div>
          </motion.div>

          {/* 🗺️ DIREITA: MAPA ESTILIZADO (SVG) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Círculos de Brilho atrás do mapa */}
            <div className="absolute inset-0 bg-farm-gradient opacity-10 blur-[100px] -z-10" />
            
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-auto opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
              fill="currentColor"
            >
              {/* Simplificação de mapa mundi em dots/pontos para look tech */}
              <path 
                d="M250 150h10v10h-10zm50 20h10v10h-10zm400 50h10v10h-10zm-50 100h10v10h-10z" // Exemplo de pontos
                className="text-white/20"
              />
              {/* Pontos Ativos pulsantes nos locais */}
              <circle cx="550" cy="380" r="12" className="fill-farm-green animate-ping opacity-75" /> {/* Moçambique */}
              <circle cx="550" cy="380" r="6" className="fill-farm-green" />
              
              <circle cx="220" cy="180" r="6" className="fill-farm-gold" /> {/* Toronto */}
              <circle cx="240" cy="210" r="6" className="fill-farm-soil" /> {/* New York */}
            </svg>

            {/* Badge de Moçambique */}
            <div className="absolute bottom-10 left-10 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hidden lg:block">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇲🇿</span>
                <div>
                  <p className="text-[10px] text-farm-leaf font-bold uppercase tracking-tighter">Base Operacional</p>
                  <p className="text-sm font-bold text-white">Nhamatanda</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
