import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-2/5 pt-20">
          <p className="text-lg">
            Browse, buy, and drive your dream car today.
          </p>
          <h1 className="text-8xl font-bold">Find your dream car</h1>
          <p className="text-lg">
            Join thousands of satisfied customers who've found their ideal car
            here.
          </p>
        </div>
        <Image
          className="w-full xl:w-3/5"
          src="/bmw.webp"
          alt="nextjs"
          width={1000}
          height={800}
        />
      </section>
    </main>
  );
}
