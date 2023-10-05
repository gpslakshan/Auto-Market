import React from "react";
import CarCompanyCard from "./CarCompanyCard";
import { partnerships } from "@/constants";

const Partnerships = () => {
  return (
    <section className="padding-x max-w-[1440px] mx-auto">
      <p className="text-[26px] font-bold text-slate-700">Partnership with:</p>
      <div className="mt-4 mb-4 flex max-sm:flex-col max-sm:gap-y-4 sm:gap-6">
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
