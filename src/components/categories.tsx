"use client";
import { categories } from "@/data/productData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Categories() {
  const searchParams = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="rounded-lgmb-4 grid grid-cols-2 gap-2 bg-gray-200 p-2 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {categories.map((category) => (
        <div
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-1 ${category.slug === selectedCategory ? "bg-white" : "text-gray-500"}`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
}
