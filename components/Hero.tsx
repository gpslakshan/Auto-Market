import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { statistics } from "@/constants";

const Hero = () => {
  return (
    <section className="w-full max-w-[1440px] min-h-screen mx-auto gap-5 padding-x flex flex-col xl:flex-row relative">
      <div className="xl:w-2/5 w-full pt-36">
        <p className="text-sm sm:text-2xl font-extrabold text-green-400">
          Browse, buy, and drive your dream car today.
        </p>
        <h1 className="mt-3 sm:mt-10 text-6xl sm:text-8xl font-bold">
          Find Your Dream Car
        </h1>
        <p className="text-slate-700 text-sm sm:text-2xl leading-6 mt-6 mb-14">
          Join thousands of satisfied customers who've found their ideal car
          here.
        </p>
        <CustomButton label="Explore Cars" iconURL="./arrow-right.svg" />
        <div className="w-full flex flex-wrap justify-start items-start gap-x-16 gap-y-6 mt-20">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-xl sm:text-4xl font-bold">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:w-3/5 w-full flex justify-end items-end xl:h-screen">
        <div className="relative w-full xl:h-full md:h-[560px] h-[400px] z-0">
          {/* https://stackoverflow.com/questions/67421778/next-js-image-layout-fill-is-broken */}
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
