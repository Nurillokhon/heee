/** @format */
"use client";
import Link from "next/link";
import { PagesTable } from "./pagestable";
import { useAppSelector } from "@/redux/hooks/hooks";
import React from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  interface User {
    id: string | null;
    lastName: string | null;
    image: string | null;
    firstName: string | null;
  }

  const me = localStorage.getItem("me");
  if (me) {
    const user: User = JSON.parse(me);
  }

  return (
    <div className="w-[15%] bg-primary-side ">
      <div className="border-b border-primary-side flex justify-evenly items-center">
        <img
          src={me ? JSON.parse(me).image : ""}
          alt=""
          className="rounded-full w-[50px] h-[50px]"
        />
        <h1 className="text-2xl text-center py-5 text-white">
          {me ? JSON.parse(me).firstName : ""}
          {"  "}
          {me ? JSON.parse(me).lastName : ""}
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {PagesTable.map((page) => (
          <Link
            href={page.path}
            key={page.path}
            className={`cursor-pointer ${
              pathname === page.path ? "bg-primary-darkside" : ""
            }`}
          >
            <h1 className="text-xl w-full text-white px-4 py-2  hover:bg-primary-darkside transition-colors ">
              {page.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
