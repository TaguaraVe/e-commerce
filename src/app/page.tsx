import Image from "next/image";
import { ProductList } from "@/components/productList";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold tracking-widest">
        Taguara Digital
      </h1>
      <div className="relative mb-12 aspect-[3/1]">
        <Image src="/images/featured.png" alt="imagen hero" fill />
      </div>
      <ProductList category={category} params="home" />
    </div>
  );
}
