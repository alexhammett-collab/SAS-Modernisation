"use client";

import AnimateIn from "./AnimateIn";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <AnimateIn>
          <div className="p-12 sm:p-16 rounded-3xl bg-surface/50 border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Design your SAS modernisation platform
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-10 max-w-xl mx-auto">
                Engage Cognition to define your programme architecture. From
                assessment through to cutover, we will design the operating
                model, squad composition and governance framework for your
                modernisation programme.
              </p>
              <a
                href="mailto:travis.myers@cognition.ai"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 group"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
