import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const SpecialOffer = () => {
  return (
    <section className="bg-black px-2 py-8 text-white mt-20 mb-3">
      <div className="padding-x max-w-[1440px] mx-auto flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col ">
          <h2 className="mt-3 sm:mt-10 text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-green-400 font-extrabold">Special Offer</span>
            : Explore the 2023 Toyota RAV4
          </h2>
          <p className="text-xl leading-8 mt-6 mb-10">
            Discover the exceptional value of the 2023 Toyota RAV4 XLE. Act now
            to take advantage of this exclusive offer and drive home your new
            RAV4 today! (
            <span className="text-green-400 font-extrabold"> Save $2,000!</span>
            )
          </p>
          <div className="mb-10">
            <CustomButton label="Shop Now" iconURL="./arrow-right.svg" />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/toyota-rav4.png"
            alt="toyota-rav4"
            width={570}
            height={520}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
