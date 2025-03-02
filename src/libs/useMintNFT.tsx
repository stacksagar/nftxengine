import { useAddress, useClaimNFT } from "@thirdweb-dev/react";

import toast from "./toast";
import useContractDetails from "../hooks/useContractDetails";

export default function useMintNFT({
  tokenId,
  quantity,
}: {
  tokenId: number;
  quantity?: number;
}) {


  
  const { contract } = useContractDetails();
  const { mutateAsync: claimNFT, isLoading: isMinting } = useClaimNFT(contract);
  const address = useAddress();

  function startMint() {
    if (address) {
      claimNFT({ to: address, quantity: quantity || 1, tokenId })
        .then(() => {
          toast({
            message: `Successfully Minted - Quantity:${1}`,
            duration: 5000,
          });
        })

        .catch(() => {
          toast({
            message: `Sorry for insufficient balance!`,
            type: "error",
          });
        });
    } else {
      
    }
  }

  return { startMint, isMinting };
}
