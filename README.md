# Cognition | SAS Modernisation Factory

A premium, mobile-first microsite positioning Cognition as a governed modernisation factory for SAS workloads powered by an AI engineering operating model.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (scroll animations and interactions)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    layout.tsx          Root layout with fonts and metadata
    page.tsx            Main page assembling all sections
    globals.css         Design tokens and global styles
  components/
    AnimateIn.tsx       Reusable scroll-triggered animation wrapper
    Header.tsx          Sticky navigation header
    Hero.tsx            Hero section with headline and CTAs
    Problem.tsx         Why SAS programmes stall
    NewModel.tsx        The modernisation factory introduction
    VirtualSquad.tsx    Product cards (Windsurf, Devin, Dana, etc.)
    FactoryLifecycle.tsx  Seven-stage operating model diagram
    ParallelExecution.tsx Orchestration diagram (centrepiece)
    Governance.tsx      Governance and control mechanisms
    Validation.tsx      Dana validation and analytics layer
    ExecutiveOutcomes.tsx Cost, time, risk outcomes
    CTA.tsx             Call to action
    Footer.tsx          Site footer
```

## Build

```bash
npm run build
npm start
```
