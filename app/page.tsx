import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import Partnerships from "@/components/Partnerships";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Partnerships />
      <NewCollection />
      <Services />
    </main>
  );
}
