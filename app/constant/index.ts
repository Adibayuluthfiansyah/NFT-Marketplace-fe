import NFTMarketplaceAbi from "../abi/NFTMarketplace.json"
import MarketPlaceNFTAbi from "../abi/MarketPlaceNFT.json"

// export const CONTRACT_ABI = NFTMarketplaceAbi.abi;
// export const CONTRACT_ADDRESS_MARKETPLACE=process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_MARKETPLACE || "";
// export const CONTRACT_ADDRESS_NFT=process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_NFT || "";

//  DATA MARKETPLACE (Untuk Jual/Beli)
export const MARKETPLACE_ABI = NFTMarketplaceAbi.abi;
export const MARKETPLACE_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_MARKETPLACE as `0x${string}`;

// DATA NFT COLLECTION (Untuk Create/Minting)
export const NFT_COLLECTION_ABI = MarketPlaceNFTAbi.abi;
export const NFT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_NFT as `0x${string}`;