import Image from "next/image";
import React from "react";

interface Props {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imgURL, label, subtext }: Props) => {
  return (
    <div className="flex-1 shadow-2xl px-10 py-16 rounded-[20px] sm:w-[350px] sm:min-w-[350px]">
      <div className="w-11 h-11 flex justify-center items-center bg-green-400 rounded-full">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 text-lg sm:text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-sm sm:text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
