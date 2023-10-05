import Image from "next/image";
import React from "react";

interface Props {
  imgURL: string;
  name: string;
  description: string;
  price: string;
}

const NewCarCard = ({ imgURL, name, description, price }: Props) => {
  return (
    <div
      className="shadow-xl rounded-[10px] w-full py-2 px-3 flex flex-col flex-1
     lg:transition lg:hover:-translate-y-6 lg:hover:scale-110 lg:duration-700 lg:ease-in-out"
    >
      <div className="flex justify-center items-center">
        <Image
          src={imgURL}
          alt={name}
          width={280}
          height={280}
          className="h-[120px] object-contain"
        />
      </div>
      <h3 className="mt-1 text-lg font-bold">{name}</h3>
      <p className="h-[60px] overflow-hidden max-sm:mb-4 mb-2 text-sm text-slate-600">
        {description}
      </p>
      <button className="px-2 py-2 border bg-green-400 text-black font-bold text-base rounded-full hover:bg-green-600 hover:text-white">
        View More
      </button>
    </div>
  );
};

export default NewCarCard;
