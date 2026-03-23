"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import {
  BarChart3,
  GitCompare,
  AlertCircle,
  ClipboardCheck,
  Lightbulb,
} from "lucide-react";

const capabilities = [
  {
    icon: GitCompare,
    title: "System reconciliation",
    description:
      "Automated comparison of outputs between legacy SAS and target platform, identifying discrepancies at row, column and aggregate level.",
  },
  {
    icon: AlertCircle,
    title: "Anomaly detection",
    description:
      "Statistical and rule-based analysis of transformation outputs, flagging unexpected patterns before they reach UAT.",
  },
  {
    icon: ClipboardCheck,
    title: "UAT support",
    description:
      "Structured test evidence, comparison reports and sign-off documentation generated automatically to accelerate user acceptance.",
  },
  {
    icon: Lightbulb,
    title: "Insight generation",
    description:
      "Proactive analysis of data quality, coverage gaps and transformation completeness, giving programme leads visibility before issues escalate.",
  },
];

export default function Validation() {
  return (
    <section id="validation" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:order-2">
            <AnimateIn>
              <p className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
                Validation and assurance
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                The analytics layer of the platform
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Dana operates as the dedicated validation and analytics agent
                within the Cognition Platform. It queries data, performs
                reconciliation and produces the evidence that programme teams
                need to move with confidence.
              </p>
              <p className="text-base text-muted/70 leading-relaxed">
                Validation is not a phase at the end of a programme. It is a
                continuous function embedded throughout the lifecycle, reducing
                risk with every iteration and providing decision-quality data to
                programme leadership.
              </p>
            </AnimateIn>
          </div>

          <div className="lg:order-1 space-y-5">
            {capabilities.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex gap-4 p-5 rounded-2xl bg-surface/30 border border-border hover:border-accent/20 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}

            <AnimateIn delay={0.5}>
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-accent/5 border border-accent/10">
                <BarChart3 className="w-5 h-5 text-accent-light shrink-0" />
                <p className="text-sm text-muted">
                  <span className="text-foreground font-medium">Dana</span>{" "}
                  provides the assurance layer that enables the platform to
                  operate at speed without compounding risk.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
