import { reviews } from "@/constants";
import React from "react";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="w-full px-2 py-8 mt-20 bg-green-200 mb-3">
      <div className="padding-x max-w-[1440px] mx-auto">
        <h2 className="w-full text-center text-lg sm:text-4xl font-bold mb-6">
          Customer Reviews
        </h2>
        <p className="w-full text-center text-sm sm:text-lg">
          Explore What Our Valued Customers Have to Say About Their Exceptional
          Experiences with Us.
        </p>
        <div className="mt-6 flex max-md:flex-col justify-center gap-10">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
