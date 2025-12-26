import NFTMarketplaceAbi from "../abi/NFTMarketplace.json"


export const CONTRACT_ABI = NFTMarketplaceAbi.abi;
export const CONTRACT_ADDRESS=process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";