"use client";

import { useState } from "react";
import Link from "next/link";
import LogoEFarm from "../LogoEFarm";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-farm-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 🔹 ESQUERDA (LOGO) */}
        <div className="flex items-center flex-1">
          <LogoEFarm />
        </div>

        {/* 🔹 CENTRO (DESKTOP MENU) */}
        <div className="hidden md:flex justify-center gap-8 text-sm font-medium flex-1 text-white/70">
          <Link href="#missao" className="hover:text-farm-leaf transition-colors">Missão Social</Link>
          <Link href="#producao" className="hover:text-farm-leaf transition-colors">Agroindústria</Link>
          <Link href="#humanitario" className="hover:text-farm-leaf transition-colors">Ajuda Humanitária</Link>
          <Link href="#contacto" className="hover:text-farm-leaf transition-colors">Parcerias</Link>
        </div>

        {/* 🔹 DIREITA (DASHBOARD & MOBILE BUTTON) */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          
          {/* DASHBOARD (DESKTOP) */}
          <Link
            href="/dashboard"
            className="hidden md:block px-5 py-2 rounded-lg bg-farm-green text-white font-bold text-sm hover:bg-farm-leaf transition-all shadow-lg shadow-farm-green/20"
          >
            Dashboard
          </Link>

          {/* MOBILE BUTTON (Hambúrguer) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl focus:outline-none p-2"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* 📱 MOBILE DROPDOWN */}
        {open && (
          <div className="absolute top-[80px] left-0 w-full bg-farm-black border-b border-white/10 flex flex-col items-center py-10 gap-6 md:hidden z-50 animate-in fade-in slide-in-from-top-5">
            <Link href="#missao" onClick={() => setOpen(false)} className="text-white/80 hover:text-farm-gold text-lg">
              Missão Social
            </Link>
            <Link href="#producao" onClick={() => setOpen(false)} className="text-white/80 hover:text-farm-gold text-lg">
              Agroindústria
            </Link>
            <Link href="#humanitario" onClick={() => setOpen(false)} className="text-white/80 hover:text-farm-gold text-lg">
              Ajuda Humanitária
            </Link>
            <Link href="#contacto" onClick={() => setOpen(false)} className="text-white/80 hover:text-farm-gold text-lg">
              Parcerias
            </Link>
            
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="mt-4 px-10 py-4 rounded-xl bg-farm-gradient text-farm-black font-black w-4/5 text-center shadow-xl"
            >
              DASHBOARD
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
