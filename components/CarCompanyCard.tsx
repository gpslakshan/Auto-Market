import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  iconURL: string;
}

const CarCompanyCard = ({ name, iconURL }: Props) => {
  return (
    <div className="w-full bg-slate-200 flex flex-row justify-center rounded-[20px] shadow-xl px-5 py-2 sm:px-10 sm:py-5">
      <Image src={iconURL} alt={name + " " + "logo"} width={50} height={50} />
    </div>
  );
};

export default CarCompanyCard;
