"use client";
import React from "react";

function generateRandom(): number {
  return Math.floor(Math.random() * 2);
}

function ReviewDetailsPage({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const randomNumber: number = generateRandom();
  if (randomNumber === 1) {
    throw new Error("Something went wrong");
  }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}

export default ReviewDetailsPage;
