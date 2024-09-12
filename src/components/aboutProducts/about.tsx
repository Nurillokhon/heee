/** @format */

import { ProductI } from "@/service/products/interface";
import { ArrowLeft, DollarSign, Star } from "react-feather";
import Box from "../box/box";
import moment from "moment";
import { ArrowDownLeft } from "react-feather";
import { useRouter } from "next/navigation";

interface aboutI {
  data?: ProductI | undefined;
}

export default function AboutProducts({ data }: aboutI) {
  const router = useRouter();
  return (
    <div className="container  m-auto">
      <p
        className="rounded-lg bg-primary-darkside text-white inline-block px-3 py-2 mt-1"
        onClick={(e) => {
          e.preventDefault();
          router.push("/main/products");
        }}
      >
        <ArrowLeft />
      </p>
      <h1 className="text-xl font-bold text-center">About {data?.title}</h1>
      <div className="flex border-b border-primary-darkside ">
        <img
          src={data?.images[0]}
          alt={data?.title}
          style={{ width: "200px", objectFit: "cover" }}
        />
        <div className="mt-10 ml-20 w-[60%]">
          <h1 className="text-2xl font-bold">{data?.title}</h1>
          <h1>
            <span className="font-bold">Brand</span>: {data?.brand}
          </h1>
          <div className="flex items-center justify-end ">
            <div className="flex items-center ">
              <DollarSign size={16} />
              <h1 className=" font-medium">
                {Math.ceil(data?.price * (data?.discountPercentage / 100))}
              </h1>
            </div>
            <h1 className=" ml-2  text-gray-500 px-1 rounded-lg line-through text-sm">
              {data?.price}
            </h1>
          </div>
          <div className="border-b border-primary-darkside my-2"></div>
          <div>
            <h1>
              <span className="font-bold">About Product</span>:{" "}
              {data?.description}
            </h1>
          </div>
          <div>
            {data?.meta && (
              <img src={data?.meta?.qrCode} alt="" style={{ width: "120px" }} />
            )}
          </div>
        </div>
      </div>
      <div className="w-[60%] m-auto  ">
        <h1 className="text-center text-2xl">Comments</h1>
        {data?.reviews &&
          data?.reviews.map((item) => {
            return (
              <div key={item.rating} className="flex justify-center">
                <Box width="300px">
                  <div className="p-2">
                    <p className="font-bold">{item.reviewerName}</p>
                    <div className="flex ">
                      {Array.from({ length: item?.rating }).map((_, index) => (
                        <span key={index}>
                          <Star color="gold" />
                        </span>
                      ))}
                      <p className="ml-2">
                        {moment(item.date).format("dd.mm.yyyy")}
                      </p>
                    </div>
                    <p>{item?.comment}</p>{" "}
                  </div>
                </Box>
              </div>
            );
          })}
      </div>
    </div>
  );
}
