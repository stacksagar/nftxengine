import { Link } from "react-router-dom";
import Button from "../../Components/Common/Button";

import {
  useClaimConditions,
  useTotalCirculatingSupply,
} from "@thirdweb-dev/react";
import useContractDetails from "../../hooks/useContractDetails";
import { useEffect } from "react";
import useNumber from "../../hooks/useNumber";
import HeroImages from "./HeroImages";

export default function Hero() {
  const { contract } = useContractDetails();
  const { data: totalMinted } = useTotalCirculatingSupply(contract);
  const price = useNumber(0.92);
  const { data: claimConditions } = useClaimConditions(contract);

  useEffect(() => {
    if (claimConditions && claimConditions?.length > 0) {
      price.setCustom(
        Number(claimConditions[0]?.currencyMetadata?.displayValue) || 0
      );
    }
  }, [claimConditions]);

  return (
    <div
      id="hero"
      className="min-h-[calc(100vh-100px)] py-20 flex flex-col items-center justify-center gap-10"
    >
      <div className="content">
        <div className="space-y-4 text-center">
          {/* Hero title */}
          <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold text-center title-font">
            Explore, Create, and Collect with
            <br />
            <span className="text-6xl md:text-[98px] text-primary-fitness tracking-wider bogart-extrabold-italic">
              NFT xENGINE
            </span>
          </h2>

          <div className="space-y-2">
            <p className="text-xl max-w-[600px] text-center mx-auto leading-7">
              NFT xEngine makes it simple to discover, collect, and share unique
              NFTs on the Polygon network. Enjoy fast, low-cost transactions and
              join a growing community of creators and collectors. Whether
              you’re an artist or an enthusiast, we’re here to help you navigate
              the world of digital art with ease.
            </p>
          </div>
          <div className="flex items-center gap-x-2 justify-center">
            <Link
              to="/mint"
              className="transition-all transform hover:scale-105"
            >
              <Button className="!bg-lightblue !rounded-xl ">
                <div className="bogart-medium-italic tracking-wider">
                  Get Started
                </div>
              </Button>
            </Link>
            <a
              rel="noopener"
              href="https://magiceden.io/collections/bsc/0x6dfbb01ecb7991366cd8acc4d18dcc67bbe345ba"
              target="_blank"
              className="transition-all transform hover:scale-105"
            >
              <Button className="!bg-primary-darklight !rounded-xl ">
                <div className="bogart-medium-italic tracking-wider">
                  Trade Coral
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <HeroImages />
      </div>

      <section
        id="overview"
        className="content grid grid-cols-2 xl:grid-cols-4 place-items-center gap-6"
      >
        <div className="flex flex-col gap-y-1 justify-start items-start p-5">
          <span className="text-2xl sm:text-4xl font-extrabold tracking-wide text-blue-100 azo-sans-bold">
            {10000}
          </span>
          <span className="font-semibold font-plus text-gray-300">
            Total Supply
          </span>
        </div>

        <div className="flex flex-col gap-y-1 justify-start items-start p-5">
          <span className="text-2xl sm:text-4xl font-extrabold tracking-wide text-blue-400 azo-sans-bold">
            {totalMinted?.toString() || 0}
          </span>
          <span className="font-semibold font-plus text-gray-300">Minted</span>
        </div>

        <div className="flex flex-col gap-y-1 justify-start items-start p-5">
          <span className="text-2xl sm:text-4xl font-extrabold tracking-wide text-green-400 azo-sans-bold">
            FREE
          </span>
          <span className="font-semibold font-plus text-gray-300">
            Mint Price
          </span>
        </div>

        <div className="flex flex-col gap-y-1 justify-start items-start p-5">
          <span className="text-2xl sm:text-4xl font-extrabold tracking-wide text-yellow-400 azo-sans-bold">
            Polygon
          </span>
          <span className="font-semibold font-plus text-gray-300">Network</span>
        </div>
      </section>
    </div>
  );
}
