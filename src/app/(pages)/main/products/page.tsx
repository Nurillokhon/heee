/** @format */

"use client";
import productsApi from "@/service/products/api";
import { useQuery } from "@tanstack/react-query";
import { ProductI } from "@/service/products/interface";
import Box from "@/components/box/box";
import { DollarSign, Search } from "react-feather";
import { useRouter } from "next/navigation";
import { SingleInput } from "@/components";
import React, { useRef } from "react";
import ButtonGroup from "@/components/Button/Button";
import CategoryProd from "@/components/aboutProducts/ProudctsCategory";
export default function Products() {
  const router = useRouter();
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [clickBox, setClickBox] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");

  React.useEffect(() => {
    if (category === "All") {
      setClickBox("");
    }
  }, [category]);

  // navigation
  const navigatePage = (id: number) => {
    router.push(`/main/products/${id}`);
  };

  const fetchProducts = async (
    search?: string,
    category?: string
  ): Promise<ProductI[]> => {
    const { data } = await productsApi.getProducts(
      "",
      search ? search : "",
      category !== "All" ? category : ""
    );
    return data.products;
  };

  const getProductsQuery = useQuery({
    queryKey: ["getProductsQuery", clickBox, category],
    queryFn: () => fetchProducts(clickBox, category),
  });

  const getSearch = () => {
    setClickBox(searchValue);
  };
  return (
    <>
      <style jsx>{`
        .custom-scrollbar {
          overflow: auto;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
      `}</style>
      <div className="h-screen container m-auto flex flex-col">
        <h1 className="text-center text-2xl font-medium py-2">Product</h1>
        <div className="w-[300px] flex items-center">
          <SingleInput
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <ButtonGroup onClick={getSearch}>
            <Search />
          </ButtonGroup>
        </div>
        <div className="mt-4">
          <CategoryProd setCategory={setCategory} />
        </div>
        {getProductsQuery.isLoading && <p>Loading...</p>}
        {getProductsQuery.isError && <p>getProductsQuery.error</p>}
        {getProductsQuery.data && (
          <div className="flex overflow-auto custom-scrollbar">
            <div className="flex justify-evenly items-start flex-wrap gap-4 p-4">
              {getProductsQuery.data.map((product, index) => (
                <Box
                  key={index}
                  width={"300px"}
                  height="200px"
                  onclick={() => navigatePage(product?.id)}
                >
                  <div className="text-center flex  justify-center items-center ">
                    <img
                      src={product.thumbnail}
                      alt={product.category}
                      style={{
                        objectFit: "cover",
                        width: "120px",
                        height: "120px",
                      }}
                    />
                  </div>

                  <h1 className="ml-2 text-[13px] font-serif font-bold">
                    {product.title}
                  </h1>
                  <h1 className="ml-2">
                    {product.brand ? product?.brand : "Food"}
                  </h1>
                  <div className="flex items-center justify-end ">
                    <div className="bg-primary-darkside flex items-center text-white px-1 rounded-tl-md rounded-bl-md">
                      <DollarSign size={16} /> <h1>{product.price}</h1>
                    </div>
                  </div>
                </Box>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
