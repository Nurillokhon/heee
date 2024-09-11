/** @format */

"use client";
import productsApi from "@/service/products/api";
import { useQuery } from "@tanstack/react-query";
import { ProductI } from "@/service/products/interface";

export default function Products() {
  const fetchProducts = async (): Promise<ProductI[]> => {
    const { data } = await productsApi.getProducts();
    return data.products;
  };

  const getProductsQuery = useQuery({
    queryKey: ["getProductsQuery"],
    queryFn: fetchProducts,
  });

  console.log(getProductsQuery.data);

  return (
    <div className="h-screen">
      <h1>Product</h1>
      {getProductsQuery.isLoading && <p>Loading...</p>}
      {getProductsQuery.isError && <p>Error loading products.</p>}
      {getProductsQuery.data && (
        <ul>
          {getProductsQuery.data.map((product, index) => (
            <li key={index}>{product.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
