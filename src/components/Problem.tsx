"use client";

import AnimateIn from "./AnimateIn";
import { AlertTriangle, Users, Clock, Shield, Layers } from "lucide-react";

const blockers = [
  {
    icon: Users,
    title: "Specialist scarcity",
    description:
      "A shallow pool of engineers who understand both SAS semantics and modern target platforms creates a permanent delivery bottleneck.",
  },
  {
    icon: Layers,
    title: "Fragmented execution",
    description:
      "Work is spread across disconnected tools and teams with no unified view of progress, dependencies or quality.",
  },
  {
    icon: Clock,
    title: "Slow validation cycles",
    description:
      "Manual reconciliation between legacy and target outputs consumes weeks of effort and delays every release.",
  },
  {
    icon: Shield,
    title: "Concentrated risk",
    description:
      "Programme knowledge lives in the heads of a handful of individuals. When they leave, continuity breaks.",
  },
  {
    icon: AlertTriangle,
    title: "No scalable capacity",
    description:
      "Hiring and onboarding cannot keep pace with programme timelines. Delivery remains linear regardless of ambition.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-3xl mb-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
            The challenge
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Why SAS programmes stall
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Most organisations understand the need to move off SAS. The business
            case is clear. But modernisation programmes consistently
            underdeliver, not because of intent, but because of structural
            execution constraints that no amount of planning can resolve alone.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blockers.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <div className="group relative h-full p-6 rounded-2xl bg-surface/50 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-accent-light" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
