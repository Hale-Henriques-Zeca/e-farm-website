"use client";
import { motion } from "framer-motion";

const missaoItems = [
  { title: "E-Hope", desc: "Recuperação e acolhimento de indivíduos em situação de vulnerabilidade.", icon: "🕊️" },
  { title: "E-Rise", desc: "Capacitação técnica e reintegração profissional através do trabalho na terra.", icon: "🌱" },
  { title: "ESS (Schools)", desc: "Práticas agrícolas para as EdenKingDom Social Schools.", icon: "📚" }
];

export default function SocialMission() {
  return (
    <section id="missao" className="py-24 bg-farm-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-farm-gold font-bold tracking-widest uppercase text-sm mb-4">Nossa Missão Social</h2>
          <p className="text-4xl md:text-5xl font-bold text-white">Transformando Vidas pela Terra</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missaoItems.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-farm-green/50 transition-all"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-farm-leaf mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
