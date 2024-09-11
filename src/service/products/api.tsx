/** @format */

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

const getProducts = () => {
  return axiosInstance.get("/products ");
};

const productsApi = {
  getProducts,
};

export default productsApi;
