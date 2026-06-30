"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="uppercase tracking-[6px] text-cyan-400 mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-6xl md:text-8xl font-extrabold"
        >
          Noel Joe Basil
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-6 text-3xl text-cyan-400"
        >
          Forward Deployed Data Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          I design and build AI-powered data platforms using Palantir Foundry,
          Python, React, Azure and modern data engineering practices.
          Currently building production systems for NHS England.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-10 flex gap-5"
        >
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400 transition"
          >
            View Projects
          </a>

          <a
            href="/cv.pdf"
            className="rounded-lg border border-white/20 px-6 py-3 hover:bg-white/10 transition"
          >
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}