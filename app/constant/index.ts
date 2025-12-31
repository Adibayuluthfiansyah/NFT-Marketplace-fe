import NFTMarketplaceAbi from "../abi/NFTMarketplace.json"


export const CONTRACT_ABI = NFTMarketplaceAbi.abi;
export const CONTRACT_ADDRESS_MARKETPLACE=process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_MARKETPLACE || "";
export const CONTRACT_ADDRESS_NFT=process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_NFT || "";