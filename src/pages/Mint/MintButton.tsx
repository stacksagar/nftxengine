import toast from "../../libs/toast";
import { useAddress, useClaimNFT, Web3Button } from "@thirdweb-dev/react";
import useContractDetails from "../../hooks/useContractDetails";
interface Props {
  quantity: number;
}
export default function MintButton({ quantity }: Props) {
  const address = useAddress();
  const { contractAddress, contract } = useContractDetails();

  const { mutateAsync: claimNFT, isLoading: isMinting } = useClaimNFT(contract);

  return (
    <Web3Button
      isDisabled={Number(quantity) < 1 || isMinting}
      className="!focus:ring focus:ring-offset-1 !bg-primary-red !text-white shadow-xl !text-xl !w-full !font-plus disabled:opacity-50"
      contractAddress={contractAddress}
      action={() =>
        claimNFT({ to: address, quantity })
          .then(() =>
            toast({
              message: `Successfully Minted - Quantity:${quantity}`,
              duration: 5000,
            })
          )

          .catch(() => {
            toast({
              message: `Something wong, try again!`,
              type: "error",
            });
          })
      }
    >
      {isMinting ? (
        "Please wait..."
      ) : (
        <div className="flex items-center gap-2">
          <span> Mint </span>
        </div>
      )}
    </Web3Button>
  );
}
