import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import NewModel from "@/components/NewModel";
import VirtualSquad from "@/components/VirtualSquad";
import FactoryLifecycle from "@/components/FactoryLifecycle";
import ParallelExecution from "@/components/ParallelExecution";
import Governance from "@/components/Governance";
import Validation from "@/components/Validation";
import ExecutiveOutcomes from "@/components/ExecutiveOutcomes";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <NewModel />
        <VirtualSquad />
        <FactoryLifecycle />
        <ParallelExecution />
        <Governance />
        <Validation />
        <ExecutiveOutcomes />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
