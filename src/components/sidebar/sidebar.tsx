/** @format */
import Link from "next/link";
import { PagesTable } from "./pagestable";

export default function Sidebar() {
  return (
    <div className="w-[20%] bg-primary-side ">
      <div className="border-b border-white">
        <h1 className="text-2xl text-center py-5 text-white">hello world </h1>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {PagesTable.map((page) => (
          <Link href={page.path} className="cursor-pointer">
            <h1 className="text-xl w-full text-white px-4 py-2  hover:bg-primary-darkside transition-colors ">
              {page.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
