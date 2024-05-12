import Link from "next/link";
import React from "react";

function Products() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>List of products</h1>
      <Link href={"/products/1"}>
        <h3>Product 1</h3>
      </Link>
      <Link href={"/products/2"}>
        <h3>Product 2</h3>
      </Link>
      <Link href={"/products/3"}>
        <h3>Product 3</h3>
      </Link>
    </>
  );
}

export default Products;
