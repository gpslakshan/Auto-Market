import React from "react";
import CustomButton from "./CustomButton";

const Subscribe = () => {
  return (
    <section className="padding-x max-w-[1440px] mx-auto flex flex-col items-center">
      <h3 className="mt-10 mb-5 max-sm:text-2xl text-4xl font-bold w-full text-center">
        Get the Latest{" "}
        <span className="text-green-400 font-extrabold"> News </span> Directly
        to Your Inbox
      </h3>
      <p className="text-center w-full max-sm:text-base text-2xl">
        Join our community and sign up for updates and our newsletter. Be the
        first to know about new arrivals, special offers, and exciting car news
        delivered right to your inbox.
      </p>
      <div className="mt-5 lg:max-w-[80%] xl:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-400 rounded-full">
        <input
          className="input"
          type="text"
          placeholder="Subscribe@auto-market.com"
        />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <CustomButton label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
