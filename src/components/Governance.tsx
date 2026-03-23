"use client";

import AnimateIn from "./AnimateIn";
import {
  GitPullRequest,
  FileText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const controls = [
  {
    icon: GitPullRequest,
    title: "PR review at scale",
    description:
      "Devin PR Review analyses and explains large pull requests, surfacing risks and structuring feedback so reviewers can move faster without sacrificing rigour.",
  },
  {
    icon: FileText,
    title: "Codified standards",
    description:
      "AGENTS.md, Windsurf workflows and reusable playbooks encode your programme conventions once. Every surface of the platform, from IDE to autonomous agent to reviewer, inherits and enforces the same standards.",
  },
  {
    icon: ShieldCheck,
    title: "Audit trails",
    description:
      "Every action, decision and output is logged. The platform produces a complete record of what was done, by whom and why, ready for compliance review.",
  },
  {
    icon: UserCheck,
    title: "Human approval layers",
    description:
      "No code merges, no deployment proceeds and no validation signs off without explicit human authorisation at defined gates throughout the lifecycle.",
  },
];

export default function Governance() {
  return (
    <section id="governance" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
              Governance and control
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Acceleration with control
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Governance is not a layer added on top. It is native to the
              platform. Controls, standards and approval gates are shared across
              every surface, enforced consistently whether work is performed by
              a human engineer or an autonomous agent.
            </p>
            <p className="text-base text-muted/70 leading-relaxed">
              The integrated knowledge layer means reviewers see the same
              context as the agents that produced the work. Playbooks encode
              standards once and enforce them everywhere. The result is a
              governance model that scales with execution, not against it.
            </p>
          </AnimateIn>

          <div className="space-y-5">
            {controls.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="group flex gap-4 p-5 rounded-2xl bg-surface/30 border border-border hover:border-accent/20 transition-all duration-300">
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
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
