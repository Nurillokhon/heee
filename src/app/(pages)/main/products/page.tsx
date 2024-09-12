/** @format */

"use client";
import productsApi from "@/service/products/api";
import { useQuery } from "@tanstack/react-query";
import { ProductI } from "@/service/products/interface";
import Box from "@/components/box/box";
import { DollarSign } from "react-feather";
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
    <div className="h-screen container m-auto flex flex-col">
      <h1 className="text-center text-2xl font-medium py-2">Product</h1>
      {getProductsQuery.isLoading && <p>Loading...</p>}
      {getProductsQuery.isError && <p>Error loading products.</p>}
      {getProductsQuery.data && (
        <div className="flex overflow-auto">
          <div className="flex justify-evenly items-start flex-wrap gap-4 p-4">
            {getProductsQuery.data.map((product, index) => (
              <Box key={index} width={"300px"} height="200px">
                <div className="text-center flex  justify-center items-center ">
                  <img
                    src={product.images[0]}
                    alt={product.category}
                    style={{
                      objectFit: "contain",
                      width: "120px",
                      height: "120px",
                    }}
                  />
                </div>

                <h1 className="ml-2 text-[16px] font-serif font-bold">
                  {product.title}
                </h1>
                <h1 className="ml-2">
                  {product.brand ? product?.brand : "Food"}
                </h1>
                <div className="flex items-center justify-end mr-2">
                  <DollarSign size={16} /> <h1>{product.price}</h1>
                </div>
              </Box>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
