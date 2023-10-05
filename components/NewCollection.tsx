import { newCars } from "@/constants";
import React from "react";
import NewCarCard from "./NewCarCard";

const NewCollection = () => {
  return (
    <section className="mb-3 padding-x max-w-[1440px] mx-auto mt-20 max-sm:mt-12">
      <h2 className="text-2xl sm:text-4xl font-bold">
        Our <span className="text-green-400">New</span> Collection
      </h2>
      <p className="mt-2 max-sm:text-sm text-slate-600">
        Explore the latest arrivals in our showroom, featuring the most coveted
        vehicles of the season.
      </p>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 max-sm:gap-4">
        {newCars.map((car, index) => (
          <NewCarCard
            key={index}
            imgURL={car.imgURL}
            name={car.name}
            description={car.description}
            price={car.price}
          />
        ))}
      </div>
    </section>
  );
};

export default NewCollection;
