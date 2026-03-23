"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  GitPullRequest,
  Terminal,
  BarChart3,
} from "lucide-react";

const squad = [
  {
    icon: Code2,
    name: "Windsurf",
    role: "Integrated development environment",
    description:
      "The primary engineering surface of the platform. Workflows, playbooks and AGENTS.md conventions are authored here and shared across every agent. DeepWiki context is natively available, so every session starts with full codebase understanding.",
    accent: "from-indigo-500/20 to-violet-500/20",
  },
  {
    icon: Bot,
    name: "Devin",
    role: "Autonomous software engineer",
    description:
      "An autonomous agent that inherits the platform's full context: codebase knowledge from DeepWiki, standards from playbooks and integrations with Slack, Jira, CLI and APIs. It executes complex tasks end to end, informed by everything the platform knows.",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: GitPullRequest,
    name: "Managed Devins",
    role: "Parallel engineering capacity",
    description:
      "A parent Devin decomposes work and delegates to multiple child agents, each inheriting the same integrated context, playbooks and governance controls. Parallel execution with shared knowledge, not siloed effort.",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Terminal,
    name: "Devin CLI and PR Review",
    role: "Structured review and integration",
    description:
      "Review tooling that draws on the same codebase understanding as the agents that wrote the code. PR analysis is informed by DeepWiki context, playbook standards and programme-specific conventions.",
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: BarChart3,
    name: "Dana",
    role: "Validation and analytics layer",
    description:
      "The platform's integrated analytics agent. Dana draws on the same knowledge layer as the engineering agents to perform reconciliation, detect anomalies and generate insights with full programme context.",
    accent: "from-rose-500/20 to-pink-500/20",
  },
];

export default function VirtualSquad() {
  return (
    <section id="squad" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-3xl mb-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
            The virtual squad
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            An engineering team that scales on demand
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            These are not standalone tools. Every surface of the Cognition
            platform shares integrated knowledge, governance controls and
            programme context. What one surface learns, every surface can use.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {squad.map((member, i) => (
            <AnimateIn key={member.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full p-6 rounded-2xl bg-surface/50 border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <member.icon className="w-5 h-5 text-accent-light" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-xs font-medium text-accent-light mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
