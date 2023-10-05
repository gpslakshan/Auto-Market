import { services } from "@/constants";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="mt-20 mb-3 padding-x max-w-[1440px] mx-auto">
      <h2 className="w-full text-center text-2xl sm:text-4xl font-bold mb-6">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-9">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
