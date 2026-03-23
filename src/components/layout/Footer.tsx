"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Loader2, MapPin } from "lucide-react";

 {/* Escritórios Fisicos */}
// --- SUB-COMPONENTE DE PRESENÇA GLOBAL (ESTILIZADO) ---
const locations = [
  { country: "Moçambique", city: "Nhamatanda", role: "Representatividade", color: "bg-farm-green" },
  { country: "Canadá", city: "Toronto", role: "Extracurricular", color: "bg-farm-gold" },
  { country: "USA", city: "Nova Iorque", role: "Sede Global", color: "bg-farm-soil" },
];

function GlobalPresenceSection() {
  return (
    
    <div className="py-12 border-b border-white/5 mb-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-farm-leaf font-bold uppercase tracking-widest text-xs mb-3">Alcance Internacional</h2>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Globe className="text-farm-gold animate-pulse w-6 h-6" /> Escritórios Físicos & Presença Global
          </h3>
          <div className="space-y-5">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className={`mt-1.5 w-2.5 h-2.5 rounded-full ${loc.color} shadow-[0_0_8px_rgba(255,255,255,0.1)]`} />
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-farm-gold transition-colors italic">{loc.country}</h4>
                  <p className="text-gray-500 text-xs">{loc.city} — {loc.role}</p>
                </div>
              </div>
            ))}
            <div className="pt-4 flex items-center gap-3 border-t border-white/5">
              <Loader2 className="w-4 h-4 text-farm-leaf animate-spin" />
              <p className="text-xs text-gray-500 italic">Mais locais de representatividade e futuras expansões em nossas instalações educacionais (ESS, E-Wisdom: "E-College, E-HomeSchooling, etc", E-Learn, e E-Acadmy) globais (Carregando)...</p>
            </div>
          </div>
        </div>
        
        {/* 🗺️ MAPA MUNDI DE CONEXÕES (ESTILO INFOGRÁFICO) */}
<div className="relative opacity-80 hover:opacity-100 transition-all duration-1000 hidden md:block group/map py-10">
  
  {/* Brilho de Fundo para dar profundidade ao Mapa */}
  <div className="absolute inset-0 bg-farm-green/5 blur-[100px] rounded-full" />
  
  <svg viewBox="0 0 1000 500" className="w-full h-auto drop-shadow-2xl">
    {/* 🌍 CONTINENTES ESTILIZADOS (Cores do Logo) */}
    <g className="opacity-40">
      {/* Américas (Azul/Ciano) */}
      <path d="M120,100 Q180,80 250,150 T220,350 T150,450" fill="currentColor" className="text-blue-500/40" />
      {/* África (Verde - A nossa Base) */}
      <path d="M480,220 Q550,180 620,250 T580,450 T480,400 Z" fill="currentColor" className="text-farm-green/60" />
      {/* Europa/Ásia (Laranja/Castanho) */}
      <path d="M450,150 Q650,50 850,150 T900,300 T700,350 Z" fill="currentColor" className="text-farm-soil/40" />
      {/* Oceania (Rosa/Roxo) */}
      <path d="M820,380 Q880,350 920,420 T850,480 Z" fill="currentColor" className="text-purple-500/40" />
    </g>

    {/* ⚡ LINHAS DE CONEXÃO TRACEJADAS (ESTILO DA IMAGEM) */}
    <g fill="none" strokeWidth="2" strokeDasharray="6,4">
      {/* Moçambique -> Toronto (Canadá) */}
      <motion.path
        d="M550,380 Q400,200 220,150" 
        stroke="var(--color-farm-gold)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Moçambique -> Nova Iorque (EUA) */}
      <motion.path
        d="M550,380 Q350,300 240,210" 
        stroke="var(--color-farm-leaf)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
    </g>

    {/* 📍 PONTOS E LABELS (Cidades) */}
    
    {/* MOÇAMBIQUE (Nhamatanda) */}
    <g className="cursor-pointer">
      <circle cx="550" cy="380" r="8" className="fill-farm-green animate-pulse" />
      <text x="565" y="385" className="fill-white text-[12px] font-bold">Nhamatanda</text>
      <text x="565" y="400" className="fill-farm-leaf text-[9px] uppercase tracking-tighter font-bold">Representative Base</text>
    </g>

    {/* CANADÁ (Toronto) */}
    <g>
      <circle cx="220" cy="150" r="5" className="fill-farm-gold" />
      <text x="140" y="145" className="fill-white/80 text-[10px] font-medium">Toronto</text>
    </g>

    {/* USA (New York) */}
    <g>
      <circle cx="240" cy="210" r="5" className="fill-farm-soil" />
      <text x="160" y="225" className="fill-white/80 text-[10px] font-medium">New York</text>
    </g>

    {/* 🧭 ROSA DOS VENTOS (DETALHE DA IMAGEM) */}
    <g transform="translate(80, 400) scale(0.6)" className="opacity-20 text-farm-gold">
      <path d="M0,-50 L10,0 L0,50 L-10,0 Z" fill="currentColor" />
      <path d="M-50,0 L0,-10 L50,0 L0,10 Z" fill="currentColor" />
    </g>
  </svg>

  {/* Info Box Estilizada */}
  <div className="absolute top-0 right-10 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl hidden lg:block">
    <p className="text-[10px] text-farm-gold font-bold uppercase mb-1 tracking-widest">Global Network</p>
    <p className="text-xs text-gray-400">Conectando a produção agrícola entre <br/> Nhamatanda aos centros globais.</p>
  </div>
</div>

 </div>
    </div>
  );
}


export default function Footer() {
  return (
    <footer className="bg-farm-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* 1. SEÇÃO DE PRESENÇA GLOBAL INTEGRADA */}
        <GlobalPresenceSection />
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
            <h3 className="text-white font-bold mb-6">Social & Educação</h3>
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
            <p className="text-sm text-gray-400 mb-2 font-semibold text-farm-leaf">Sede Representativa de Moçambique</p>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Operações agroindustriais focadas na recuperação e desenvolvimento local.
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
              EdenKingDom Divisions: E-Farm+ & E-Social
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
