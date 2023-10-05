import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import Partnerships from "@/components/Partnerships";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Partnerships />
      <NewCollection />
      <SpecialOffer />
      <Services />
      <CustomerReviews />
    </main>
  );
}
