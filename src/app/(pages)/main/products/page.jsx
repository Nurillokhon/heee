/** @format */
"use client";

import fetchProducts from "@/service/products/api";
import { useQuery } from "@tanstack/react-query";
export default function Products() {
  console.log(getProductsQuery.data);
  return (
    <div className=" h-screen">
      <h1>Product</h1>
    </div>
  );
}
