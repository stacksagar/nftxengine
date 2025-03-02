import { lazy } from "react";

const Landing = lazy(() => import("../pages/Home/Landing"));
const Mint = lazy(() => import("../pages/Mint/Mint"));

const public_pages = {
  "/": Landing,
  "/mint": Mint,
};

export default public_pages;
