"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-farm-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* 🔹 COLUNA 1: SOBRE & LOGO */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold  bg-clip-text  mb-6">
              EdenKingDom Farm+
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Divisão agroindustrial oficial da EdenKingDom Corporation. 
              Produção integrada para sustentar mercados corporativos e missões humanitárias.
            </p>
          </div>

          {/* 🔹 COLUNA 2: ECOSSISTEMA CORPORATIVO */}
          <div>
            <h3 className="text-white font-bold mb-6">Corporação</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-farm-leaf transition-colors">EdenKingDom Markets</Link></li>
              <li><Link href="#" className="hover:text-farm-leaf transition-colors">E-Marketing Division</Link></li>
              <li><Link href="#" className="hover:text-farm-leaf transition-colors">Logística & Distribuição</Link></li>
              <li><Link href="#" className="hover:text-farm-leaf transition-colors">Relatórios de Sustentabilidade</Link></li>
            </ul>
          </div>

          {/* 🔹 COLUNA 3: IMPACTO SOCIAL (MOÇAMBIQUE) */}
          <div>
            <h3 className="text-farm-gold font-bold mb-6">Social & Educação</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-farm-gold transition-colors">Programa E-Rise</Link></li>
              <li><Link href="#" className="hover:text-farm-gold transition-colors">Apoio E-Hope</Link></li>
              <li><Link href="#" className="hover:text-farm-gold transition-colors">EdenKingDom Social Schools</Link></li>
              <li><Link href="#" className="hover:text-farm-gold transition-colors">Ajuda Humanitária</Link></li>
            </ul>
          </div>

          {/* 🔹 COLUNA 4: CONTATO & LOCALIZAÇÃO */}
          <div>
            <h3 className="text-white font-bold mb-6">Presença</h3>
            <p className="text-sm text-gray-400 mb-2 font-semibold text-farm-leaf">Sede Moçambique</p>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Operações agroindustriais focadas na recuperação e desenvolvimento global.
            </p>
          </div>
        </div>

        {/* 🔹 BARRA FINAL (DIREITOS) */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 italic text-center md:text-left">
            Since © 2025 to {new Date().getFullYear()} EdenKingDom Corporation. Todos os direitos reservados. 
            "Alimentando o Mundo, Cultivando Esperança."
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] px-2 py-1 rounded border border-white/10 text-gray-500 uppercase tracking-widest font-bold">
              Division: Agro & Social
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
