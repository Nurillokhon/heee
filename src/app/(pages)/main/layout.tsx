/** @format */

import React from "react";
import { Sidebar } from "@/components";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-[85%]">{children}</div>
    </div>
  );
}
