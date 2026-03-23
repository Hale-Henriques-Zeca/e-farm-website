"use client";

import { motion } from "framer-motion";

const products = [
  {
    type: "Agricultura",
    title: "Cultivos Premium",
    desc: "Cereais, hortícolas e frutas cultivados com tecnologia de precisão para os mercados EdenKingDom.",
    icon: "🌾",
    color: "from-farm-green/20"
  },
  {
    type: "Pecuária",
    title: "Criação Sustentável",
    desc: "Produção de proteína animal seguindo rigorosos padrões de bem-estar e qualidade nutricional.",
    icon: "🐄",
    color: "from-farm-soil/20"
  },
  {
    type: "Escolas Sociais",
    title: "Laboratórios Vivos",
    desc: "Campos de treino para os alunos das ESS aprenderem as melhores práticas agrícolas no terreno.",
    icon: "🎓",
    color: "from-farm-gold/20"
  }
];

export default function ProductGallery() {
  return (
    <section id="producao" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-farm-leaf font-bold uppercase tracking-widest text-sm mb-2">Agroindústria</h2>
            <p className="text-4xl font-bold text-white">Nossa Produção Integrada</p>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">
            Abastecendo o ecossistema corporativo com produtos frescos, éticos e de alta qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br ${item.color} to-transparent p-8 hover:border-farm-leaf/30 transition-all`}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-farm-leaf/60 mb-2 block">
                {item.type}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              
              <div className="h-1 w-12 bg-farm-gradient rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
