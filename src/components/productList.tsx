import Link from "next/link";

import { products } from "@/data/productData";
import { Categories } from "@/components/categories";
import { ProductsCard } from "@/components/productsCard";
import Filter from "@/components/filter";

export function ProductList({
  category,
  params,
}: {
  category: string;
  params: "home" | "products";
}) {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="mt-4 flex justify-end text-sm text-gray-500 underline"
      >
        View All Products
      </Link>
    </div>
  );
}
