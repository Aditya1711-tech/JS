"use client";
import { useRouter } from "next/navigation";
import React from "react";

function OrderProduct() {
  const router = useRouter();
  const handleOrder = () => {
    router.push("/");
  };

  return (
    <>
      <h1>Order product page</h1>
      <button onClick={handleOrder}>Order</button>
    </>
  );
}

export default OrderProduct;
