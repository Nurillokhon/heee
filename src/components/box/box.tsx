/** @format */

import React, { ReactNode } from "react";

/** @format */
interface BoxProps {
  children: ReactNode;
  width?: string;
  height?: string;
  onclick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
export default function Box({ children, width, height, onclick }: BoxProps) {
  return (
    <div
      className="border border-primary-darkside rounded-md m-4 cursor-pointer"
      style={{ width: `${width}`, height: `${height}` }}
      onClick={onclick}
    >
      <div>{children}</div>
    </div>
  );
}
