"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Loader2 } from "lucide-react"; // Importando ícones profissionais

export default function OfficesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="p-1"
    >
      <h3 className="text-white font-bold mb-6 flex items-center gap-2">
        <Globe className="text-farm-leaf w-5 h-5" /> 
        Escritórios Físicos & Presença
      </h3>
      
      <ul className="space-y-4 text-sm text-gray-400">
        <li className="flex items-start gap-3 group">
          <div className="mt-1 w-2 h-2 rounded-full bg-farm-green shadow-[0_0_8px_rgba(74,222,128,0.5)] group-hover:scale-125 transition-transform" />
          <div>
            <span className="text-white font-medium block">Moçambique</span>
            <span className="text-xs text-gray-500">Nhamatanda (Representatividade)</span>
          </div>
        </li>

        <li className="flex items-start gap-3 group">
          <div className="mt-1 w-2 h-2 rounded-full bg-farm-gold group-hover:scale-125 transition-transform" />
          <div>
            <span className="text-white font-medium block">Canadá</span>
            <span className="text-xs text-gray-500">Toronto (Extracurricular)</span>
          </div>
        </li>

        <li className="flex items-start gap-3 group">
          <div className="mt-1 w-2 h-2 rounded-full bg-farm-soil group-hover:scale-125 transition-transform" />
          <div>
            <span className="text-white font-medium block">USA</span>
            <span className="text-xs text-gray-500">Nova Iorque (Sede Global)</span>
          </div>
        </li>

        <li className="flex items-start gap-3 pt-2 border-t border-white/5">
          <Loader2 className="w-4 h-4 text-farm-leaf animate-spin" />
          <p className="text-xs italic text-gray-500 leading-relaxed">
            Mais locais de representatividade e futuras expansões em nossas instalações educacionais globais...
          </p>
        </li>
      </ul>
    </motion.div>
  );
}
