/** @format */

import React, { ReactNode } from "react";

/** @format */
interface BoxProps {
  children: ReactNode;
  width: string;
  height: string;
}
export default function Box({ children, width, height }: BoxProps) {
  return (
    <div
      className="border border-primary-darkside rounded-md m-4 cursor-pointer"
      style={{ width: `${width}`, height: `${height}` }}
    >
      <div>{children}</div>
    </div>
  );
}
