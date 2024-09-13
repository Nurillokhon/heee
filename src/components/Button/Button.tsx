/** @format */

import { useState } from "react";

interface ButtonI {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  active?: string | boolean;
}

export default function ButtonGroup({ onClick, children, active }: ButtonI) {
  const isActive = active === String(children);
  return (
    <button
      className={`px-4 py-2 bg-primary-darkside text-white ml-2 rounded-lg ${
        isActive &&
        "border border-primary-darkside text-primary-darkside bg-white"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
