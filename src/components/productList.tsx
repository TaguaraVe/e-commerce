import { products } from "@/data/productData";
import { Categories } from "./categories";
import { ProductsCard } from "./productsCard";

export function ProductList() {
  return (
    <div className="w-full">
      <Categories />
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
