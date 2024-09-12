/** @format */

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

const getProducts = (id: string) => {
  return axiosInstance.get(`/products/${id ? id : ""}`);
};

const productsApi = {
  getProducts,
};

export default productsApi;
