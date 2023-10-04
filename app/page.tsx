import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex flex-col xl:flex-row relative overflow-hidden">
        <div className="xl:w-2/5 pt-20">
          <p className="text-lg">
            Browse, buy, and drive your dream car today.
          </p>
          <h1 className="text-8xl font-bold">Find your dream car</h1>
          <p className="text-lg">
            Join thousands of satisfied customers who've found their ideal car
            here.
          </p>
        </div>
        {/* <div className="w-full xl:w-3/5 flex justify-end items-end xl:h-screen"> */}
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </section>
    </main>
  );
}
