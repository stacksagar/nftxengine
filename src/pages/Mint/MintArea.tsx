import {
  useWallet,
  useBalance,
  useAddress,
  useClaimConditions,
  useTotalCirculatingSupply,
  useTotalCount,
} from "@thirdweb-dev/react";
import useContractDetails from "../../hooks/useContractDetails";
import useNumber from "../../hooks/useNumber";
import useString from "../../hooks/useString";
import React, { useEffect } from "react";
import MintButton from "./MintButton";

export default function MintArea() {
  const quantity = useNumber(1);

  const { contract } = useContractDetails();
  const { data: totalSupply } = useTotalCount(contract);
  const { data: totalMinted } = useTotalCirculatingSupply(contract);
  const { data: claimConditions } = useClaimConditions(contract);
  const price = useNumber(0.0);
  const symbol = useString("POL");

  useEffect(() => {
    if (claimConditions && claimConditions?.length > 0) {
      price.setCustom(
        Number(claimConditions[0]?.currencyMetadata?.displayValue) || 0
      );
      symbol.setCustom(claimConditions[0]?.currencyMetadata?.symbol || "POL");
    }
  }, [claimConditions]);

  function quantityHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e?.target?.value || "1") || 1;

    if (value > 2) return;

    if (value < 1) {
      quantity.setCustom(1);
      return;
    }

    quantity.setCustom(value);
  }

  return (
    <div
      id="mint"
      className="py-12 md:py-20 xl:min-h-[calc(100vh-120px)] xl:flex flex-col items-center justify-center"
    >
      <div className="content">
        <div className="max-w-[700px] mx-auto">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-medium tracking-wide pb-2"></h5>

            <p className="text-lg">
              {totalMinted?.toNumber() || 0}/{totalSupply?.toNumber() || 13000}
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 bg-primary-light shadow-lg flex flex-col md:flex-row items-center justify-between">
            <img
              className="w-full h-full md:max-w-[350px] object-cover rounded-l-lg"
              src="/nfts.gif"
              alt=""
            />
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full h-fit flex flex-col p-6 gap-3">
                <h3 className="text-2xl mb-5 text-center bogart-semibold-italic tracking-wider text-primary-wellness">
                  Reefer Collection
                </h3>
                <div className="flex items-center justify-between text-gray-800">
                  <span> Quantity:</span>
                  <input
                    className="w-32 bg-gray-800 text-white px-4 py-2 rounded focus:ring"
                    type="number"
                    title="select quantity"
                    placeholder="1"
                    value={quantity.value}
                    onChange={quantityHandler}
                  />
                </div>

                <div className="flex items-center justify-between text-gray-800">
                  <span>Mint Cost:</span>
                  <div>
                    {((quantity.value || 0) * (price.value || 0)).toFixed(2)}{" "}
                    {symbol.value} + gas fees
                  </div>
                </div>
                <br />
                <div className="space-y-2">
                  <div className="w-full block">
                    <MintButton quantity={quantity.value} />
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Mint And Get Your NFT for trading!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
