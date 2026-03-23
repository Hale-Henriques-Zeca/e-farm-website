"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroEFarmLogo() {
  return (
    <div className="w-full flex justify-center mb-12">

      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Link href="/" className="text-5xl md:text-6xl font-extrabold leading-tight mb-0.1">

          <Image
            src="/logo-efarm.png"
            alt="E-Farm+ Logo"
            width={500}
            height={80}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-0.1"
            priority
          />
        </Link>
      </motion.div>

    </div>
  );
}