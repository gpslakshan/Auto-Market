import Image from "next/image";
import React from "react";

interface Props {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  return (
    <div
      className="shadow-xl bg-white px-4 py-6 rounded-3xl flex 
     items-center flex-col"
    >
      <Image
        src={imgURL}
        alt="customer"
        width={120}
        height={120}
        className="rounded-full object-cover"
      />
      <h3 className="mt-1 text-lg sm:text-3xl text-center font-bold">
        {customerName}
      </h3>
      {/* <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src="/star.svg"
          alt="rating star"
          width={24}
          height={24}
          className="object-contain w-[10px] h-[10px]"
        />
        <p className="text-base sm:text-xl text-slate-gray">({rating})</p>
      </div> */}
      <p className="mt-6 max-w-sm text-sm sm:text-lg">"{feedback}"</p>
    </div>
  );
};

export default ReviewCard;
