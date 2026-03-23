"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LogoEFarm() {
  return (
    <div className="flex items-center">
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-efarm.png" // Certifique-se de que o nome do arquivo na pasta public é este
            alt="E-Farm+ Logo"
            width={50} // Tamanho ideal para o Header
            height={50}
            className="object-contain"
            priority
          />
          <span className="text-xl md:text-2xl font-black  bg-clip-text  tracking-tighter">
            E-Farm+
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
