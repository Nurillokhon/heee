/** @format */
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Main() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "" || token === null) {
      router.push("/login");
    }
    if (token) {
      router.push("/main");
    }
  }, []);
  return (
    <div className="h-screen bg-gray-700 w-full">
      <div>aaa</div>
    </div>
  );
}
