/** @format */

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

const getProducts = (id: string, search?: string, category?: string) => {
  const query = id
    ? id
    : search
    ? `/search?q=${search}`
    : category
    ? `/category/${category}`
    : "";
  return axiosInstance.get(`/products/${query}`);
};

const getCategorieList = () => {
  return axiosInstance.get(`/products/category-list`);
};
const productsApi = {
  getProducts,
  getCategorieList,
};

export default productsApi;
