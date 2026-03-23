"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import { TrendingDown, Clock, ShieldCheck } from "lucide-react";

const outcomes = [
  {
    icon: TrendingDown,
    title: "Cost leverage",
    points: [
      "Reduce dependency on scarce, high-cost SAS specialists",
      "Shift capacity from headcount to orchestrated engineering agents",
      "Deliver more workloads per programme cycle with lower marginal cost",
    ],
  },
  {
    icon: Clock,
    title: "Time compression",
    points: [
      "Execute translation and build work in parallel, not in sequence",
      "Accelerate review cycles through structured, AI-assisted analysis",
      "Shorten programme timelines from years to quarters",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Risk reduction",
    points: [
      "Continuous validation embedded throughout the lifecycle",
      "Complete audit trails for every decision and output",
      "Governed workflows with human approval at every critical gate",
    ],
  },
];

export default function ExecutiveOutcomes() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
            Executive outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Board-level impact
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            The platform delivers measurable outcomes across the three
            dimensions that matter most to programme sponsors and executive
            leadership.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, i) => (
            <AnimateIn key={outcome.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group h-full p-8 rounded-2xl bg-surface/50 border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <outcome.icon className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-xl font-bold mb-5">{outcome.title}</h3>
                <ul className="space-y-3">
                  {outcome.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
