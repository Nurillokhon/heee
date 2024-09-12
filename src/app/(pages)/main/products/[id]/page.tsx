/** @format */
"use client";

import productsApi from "@/service/products/api";
import { ProductI } from "@/service/products/interface";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import AboutProducts from "@/components/aboutProducts/about";

export default function pageItem() {
  const params = useParams();

  const fetchProducts = async (id: any): Promise<ProductI> => {
    const { data } = await productsApi.getProducts(id);
    return data;
  };

  const getProductsQuery1 = useQuery({
    queryKey: ["getProductsQuery1", params.id],
    queryFn: () => fetchProducts(params.id),
  });

  return (
    getProductsQuery1.data !== undefined && (
      <AboutProducts data={getProductsQuery1.data} />
    )
  );
}
