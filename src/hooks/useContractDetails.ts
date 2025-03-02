import { useContract } from "@thirdweb-dev/react";

export default function useContractDetails() {
  const contractAddress = "0x6DFBB01ECB7991366Cd8acc4D18dCc67bbe345ba";
  const { contract, isLoading } = useContract(contractAddress);
  return { contract, isLoading, contractAddress };
}
