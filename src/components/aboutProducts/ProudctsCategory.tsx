/** @format */

import productsApi from "@/service/products/api";
import { useQuery } from "@tanstack/react-query";
import ButtonGroup from "../Button/Button";
import React, { useRef } from "react";

export default function CategoryProd() {
  const scrollContainerRef = useRef<any>(null);
  const [active, setactive] = React.useState<string | boolean>("");

  const handleWheel = (event: any) => {
    if (event.deltaY !== 0) {
      event.preventDefault();
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };
  const getData = async () => {
    const { data } = await productsApi.getCategorieList();
    return ["All", ...data];
  };
  const getDataQuery = useQuery({
    queryKey: ["getDataQuery"],
    queryFn: getData,
  });

  return (
    <div className="h-[60px]">
      <style jsx>{`
        .custom-scrollbar {
          overflow: auto;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
      `}</style>
      <div
        className="overflow-y-auto  whitespace-nowrap h-[60px] custom-scrollbar "
        onWheel={handleWheel}
        ref={scrollContainerRef}
      >
        {getDataQuery.data?.map((item: string) => {
          return (
            <ButtonGroup
              onClick={(e) => {
                e.preventDefault();
                setactive(item);
              }}
              active={active}
            >
              {item}
            </ButtonGroup>
          );
        })}
      </div>
    </div>
  );
}
