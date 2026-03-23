"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase text-accent-light border border-accent/20 bg-accent/5">
            SAS Modernisation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-8"
        >
          Modernise SAS with a{" "}
          <span className="gradient-text">governed engineering platform</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-6"
        >
          Transform legacy SAS workloads into modern data platforms through an AI
          engineering operating model combining autonomous execution, parallel
          capacity, structured review and analytics-led validation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-base text-muted/70 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Transformation at scale requires more than tooling. It requires a
          system: repeatable processes, governed execution and the capacity to
          deliver in parallel. Cognition turns SAS modernisation from a
          constrained project into an engineered programme.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
          >
            Design your platform
          </a>
          <a
            href="#model"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-border hover:border-muted/40 text-muted hover:text-foreground font-medium transition-all duration-200"
          >
            Explore the model
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#problem" className="text-muted/40 hover:text-muted transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
