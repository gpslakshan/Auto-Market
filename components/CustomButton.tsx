import Image from "next/image";
import React from "react";

interface Props {
  label: string;
  iconURL?: string;
}

const CustomButton = ({ label, iconURL }: Props) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border bg-green-400 text-black font-bold text-lg leading-none rounded-full">
      {label}
      {iconURL && (
        <Image src={iconURL} alt="arrow right" width={20} height={20} />
      )}
    </button>
  );
};

export default CustomButton;
