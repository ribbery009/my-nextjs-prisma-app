"use client";

import { Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services";
import Link from "next/link";

export default function Products() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => fetchProducts(),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-3">Products</h1>
      <Link
        href="/users"
        className="mb-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Users
      </Link>
      <ul>
        {data?.products?.map((product: Product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
