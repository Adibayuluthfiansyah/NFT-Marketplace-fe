import { useCallback, useState } from "react";
import {
  useReadContract,
  useWriteContract,
  usePublicClient,
  useAccount,
  useTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import {
  NFT_COLLECTION_ABI,
  NFT_ADDRESS,
  MARKETPLACE_ADDRESS,
} from "../constant";
import { toast } from "sonner";

export const useNFTContract = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { address: userAddress } = useAccount();
  const publicClient = usePublicClient();
  const {
    writeContractAsync,
    data: hash,
    isPending: isWritePending,
    error: writeError,
  } = useWriteContract();

  // write function
};
