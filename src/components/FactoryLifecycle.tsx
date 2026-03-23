"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import {
  Search,
  LayoutGrid,
  Languages,
  Hammer,
  GitPullRequest,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const stages = [
  {
    icon: Search,
    label: "Assess",
    detail: "Catalogue SAS workloads, map dependencies, score complexity",
    tools: ["Windsurf", "Dana"],
  },
  {
    icon: LayoutGrid,
    label: "Decompose",
    detail: "Break programmes into discrete, parallelisable work units",
    tools: ["Devin", "Windsurf"],
  },
  {
    icon: Languages,
    label: "Translate",
    detail: "Convert SAS logic to target platform code with semantic fidelity",
    tools: ["Devin", "Managed Devins"],
  },
  {
    icon: Hammer,
    label: "Build",
    detail: "Construct pipelines, transformations and orchestration layers",
    tools: ["Managed Devins", "Windsurf"],
  },
  {
    icon: GitPullRequest,
    label: "Review",
    detail: "Structured PR review, standards enforcement and approval gates",
    tools: ["Devin PR Review", "Devin CLI"],
  },
  {
    icon: CheckCircle2,
    label: "Validate",
    detail: "Automated reconciliation, anomaly detection and UAT support",
    tools: ["Dana"],
  },
  {
    icon: Rocket,
    label: "Cutover",
    detail: "Governed deployment with rollback capability and audit trails",
    tools: ["Windsurf", "Devin"],
  },
];

export default function FactoryLifecycle() {
  return (
    <section id="factory" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-3xl mb-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
            Programme lifecycle
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From assessment to cutover
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            The platform operates across seven defined stages. Each stage has
            clear inputs, outputs, quality gates and assigned components. This is
            not a methodology diagram. It is an operating model.
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:block">
            <div className="flex items-start gap-0">
              {stages.map((stage, i) => (
                <AnimateIn
                  key={stage.label}
                  delay={i * 0.08}
                  className="flex-1 relative"
                >
                  <div className="flex flex-col items-center text-center group">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="w-14 h-14 rounded-2xl bg-surface border border-border group-hover:border-accent/40 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/10"
                    >
                      <stage.icon className="w-6 h-6 text-accent-light" />
                    </motion.div>

                    {i < stages.length - 1 && (
                      <div className="absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px">
                        <div className="w-full h-px bg-gradient-to-r from-accent/40 to-accent/10" />
                      </div>
                    )}

                    <h3 className="text-sm font-semibold mb-2">
                      {stage.label}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-3 px-2">
                      {stage.detail}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {stage.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent-light font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Mobile/tablet: vertical flow */}
          <div className="lg:hidden space-y-6">
            {stages.map((stage, i) => (
              <AnimateIn key={stage.label} delay={i * 0.06}>
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center">
                      <stage.icon className="w-5 h-5 text-accent-light" />
                    </div>
                    {i < stages.length - 1 && (
                      <div className="w-px h-8 bg-gradient-to-b from-accent/30 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold mb-1">
                      {stage.label}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-2">
                      {stage.detail}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {stage.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent-light font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
