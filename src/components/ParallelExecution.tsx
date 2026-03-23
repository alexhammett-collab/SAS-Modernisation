"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import { User, Bot, ArrowRight } from "lucide-react";

const workstreams = [
  { label: "SAS Proc SQL migration", delay: 0 },
  { label: "Macro library translation", delay: 0.3 },
  { label: "Data step conversion", delay: 0.6 },
  { label: "Report pipeline rebuild", delay: 0.15 },
  { label: "ETL orchestration layer", delay: 0.45 },
];

export default function ParallelExecution() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[140px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-3xl mb-6">
          <p className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
            Core capability
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From linear delivery to{" "}
            <span className="gradient-text">orchestrated parallelism</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Traditional programmes execute sequentially: one workload, one
            engineer, one review cycle at a time. Cognition inverts this
            constraint. A single engineering lead orchestrates multiple
            autonomous Devins, each operating in an isolated environment,
            delivering coordinated outputs in parallel.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15} className="mb-20">
          <p className="text-base text-muted/70 leading-relaxed max-w-2xl">
            Managed Devins are the capacity multiplier at the heart of the
            platform. A parent Devin decomposes a body of work, delegates tasks to
            child Devins and coordinates their outputs. This is not fan-out. It
            is structured, governed parallel execution.
          </p>
        </AnimateIn>

        {/* Orchestration Diagram */}
        <AnimateIn delay={0.2}>
          <div className="relative rounded-3xl bg-surface/50 border border-border p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

            <div className="relative">
              {/* Lead Engineer */}
              <div className="flex justify-center mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-3">
                    <User className="w-7 h-7 text-accent-light" />
                  </div>
                  <span className="text-sm font-semibold">
                    Engineering Lead
                  </span>
                  <span className="text-xs text-muted mt-0.5">
                    Orchestrates and governs
                  </span>
                </motion.div>
              </div>

              {/* Connector lines */}
              <div className="hidden sm:flex justify-center mb-4">
                <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-accent/20" />
              </div>

              {/* Parent Devin */}
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-accent/10 border border-accent/20"
                >
                  <Bot className="w-5 h-5 text-accent-light" />
                  <div>
                    <span className="text-sm font-semibold block">
                      Parent Devin
                    </span>
                    <span className="text-xs text-muted">
                      Decomposes and delegates
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Fan-out connector */}
              <div className="hidden sm:flex justify-center mb-4">
                <div className="relative w-full max-w-2xl h-8">
                  <div className="absolute left-1/2 top-0 w-px h-4 bg-accent/30" />
                  <div className="absolute left-[10%] right-[10%] top-4 h-px bg-accent/20" />
                  {workstreams.map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-4 w-px h-4 bg-accent/30"
                      style={{
                        left: `${10 + (i * 80) / (workstreams.length - 1)}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Workstreams */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {workstreams.map((ws, i) => (
                  <motion.div
                    key={ws.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="group"
                  >
                    <div className="relative p-4 rounded-xl bg-background/60 border border-border group-hover:border-accent/30 transition-all duration-300 text-center">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                        <Bot className="w-4 h-4 text-accent-light" />
                      </div>
                      <span className="text-xs font-medium block mb-1">
                        Devin {i + 1}
                      </span>
                      <span className="text-[11px] text-muted leading-tight block">
                        {ws.label}
                      </span>

                      {/* Animated progress bar */}
                      <div className="mt-3 h-1 rounded-full bg-surface-light overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 2,
                            delay: 0.8 + ws.delay,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Coordinated output */}
              <div className="hidden sm:flex justify-center mt-8">
                <div className="relative w-full max-w-2xl h-8">
                  {workstreams.map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-0 w-px h-4 bg-accent/30"
                      style={{
                        left: `${10 + (i * 80) / (workstreams.length - 1)}%`,
                      }}
                    />
                  ))}
                  <div className="absolute left-[10%] right-[10%] top-4 h-px bg-accent/20" />
                  <div className="absolute left-1/2 top-4 w-px h-4 bg-accent/30" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex justify-center mt-4"
              >
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-300">
                    Coordinated, reviewed, validated output
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
