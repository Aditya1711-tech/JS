import Link from "next/link";

function ProductDetailsPage({ params }: { params: { productId: string } }) {
  return (
    <>
      <Link href={"/products"}>Back</Link>
      <h1>Product details of {params.productId}</h1>;
    </>
  );
}

export default ProductDetailsPage;
