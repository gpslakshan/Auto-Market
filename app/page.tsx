import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="flex">
        <div className="w-2/5">
          <h1 className="text-8xl font-bold pt-20">Find your dream car</h1>
        </div>
        <Image
          className="w-3/5"
          src="/bmw.webp"
          alt="nextjs"
          width={1000}
          height={800}
        />
      </section>
    </main>
  );
}
