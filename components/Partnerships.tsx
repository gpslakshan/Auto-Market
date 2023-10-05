import React from "react";
import CarCompanyCard from "./CarCompanyCard";
import { partnerships } from "@/constants";

const Partnerships = () => {
  return (
    <section className="padding-x max-w-[1440px] mx-auto">
      <p className="text-[26px] font-bold text-slate-700">Partnership with:</p>
      <div className="mt-4 flex flex-wrap justify-start max-sm:gap-x-6 sm:justify-between gap-y-3">
        {partnerships.map((partner, index) => (
          <CarCompanyCard
            key={index}
            name={partner.name}
            iconURL={partner.iconURL}
          />
        ))}
      </div>
    </section>
  );
};

export default Partnerships;
