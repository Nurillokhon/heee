/** @format */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "" || token === null) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <h1 className="">heee</h1>
    </div>
  );
}
