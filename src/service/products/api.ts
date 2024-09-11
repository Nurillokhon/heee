/** @format */
"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";
import ProductI from "./interface";

const getProducts = () => {
  return axiosInstance.get("/products");
};

const fetchProducts = async (): Promise<ProductI[]> => {
  const { data } = await getProducts();
  return data.products;
};

const getProductsQuery = useQuery({
  queryKey: ["getProductsQuery"],
  queryFn: () => fetchProducts(),
});



export default getProductsQuery


