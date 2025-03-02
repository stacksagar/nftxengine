import React from "react";
import { Link } from "react-router-dom";

export default function TextLogo() {
  return (
    <Link
      to="/#hero"
      className="inline-flex items-center text-3xl sm:text-4xl text-center title-font w-fit font-extrabold"
    >
      <span className="text-green-500">NFT</span>
      <span className="text-blue-500">xEngine</span>
    </Link>
  );
}
