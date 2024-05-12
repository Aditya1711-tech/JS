import Link from "next/link";

function Home() {
  return (
    <>
      <div>Welcome Home</div>
      <Link href={"/products"}>products</Link>
      <Link href={"/about"}>about</Link>
    </>
  );
}

export default Home;
