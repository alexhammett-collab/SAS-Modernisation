"use client";

import AnimateIn from "./AnimateIn";
import { Boxes, GitBranch, ShieldCheck, BarChart3, Brain, Layers } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Integrated knowledge layer",
    description:
      "DeepWiki builds a living understanding of every codebase, SAS and target. This shared context flows across every surface, so agents, reviewers and analysts all operate from the same source of truth.",
  },
  {
    icon: Layers,
    title: "Unified execution surfaces",
    description:
      "IDE, autonomous agents, review tooling and analytics are not separate products. They are surfaces of a single platform, sharing context, controls and institutional knowledge.",
  },
  {
    icon: Boxes,
    title: "Playbooks and reusable patterns",
    description:
      "Codified workflows, AGENTS.md conventions and reusable transformation playbooks encode your programme standards once and enforce them everywhere, across every agent and every workstream.",
  },
  {
    icon: GitBranch,
    title: "Parallel execution at scale",
    description:
      "Work units are distributed across autonomous agents operating in isolated environments, each inheriting the full context of the platform, delivering in parallel rather than in sequence.",
  },
  {
    icon: ShieldCheck,
    title: "Native governance",
    description:
      "Controls are not bolted on. Review gates, approval layers and audit trails are built into the platform. Every surface enforces the same standards without additional tooling.",
  },
  {
    icon: BarChart3,
    title: "Continuous validation",
    description:
      "Automated reconciliation and analytics run throughout the lifecycle, fed by the same integrated knowledge layer that drives execution.",
  },
];

export default function NewModel() {
  return (
    <section id="model" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-3xl mb-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
            A new approach
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Cognition Platform
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Cognition is not a collection of disconnected tools. It is a single
            integrated platform where every surface shares the same knowledge,
            the same controls and the same understanding of your codebase.
          </p>
          <p className="text-base text-muted/70 leading-relaxed">
            From deep codebase comprehension through DeepWiki, to codified
            playbooks that encode programme standards, to autonomous agents that
            inherit full project context, every capability in the platform
            reinforces every other. The result is a modernisation system where
            knowledge compounds and quality scales.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <AnimateIn key={pillar.title} delay={i * 0.1}>
              <div className="group flex gap-5 p-6 rounded-2xl bg-surface/30 border border-border hover:border-accent/20 transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6 text-accent-light" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
