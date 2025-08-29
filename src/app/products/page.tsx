import { ProductList } from "@/components/productList";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
}
