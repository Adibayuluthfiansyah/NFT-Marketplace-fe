import {NFTStorage} from 'nft.storage';
import { NFTMetadata } from '../app/types/wallet';


const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY || '';

export async function uploadNFTToIPFS (data: NFTMetadata) {
    if (!NFT_STORAGE_TOKEN) {
        throw new Error('NFT Storage API key is not defined');
    }
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
    try {
        const metadata = await client.store({
            name: data.name,
            description: data.description,
            // image: new File([data.image], data.image.name, { type: data.image.type }),
            image: data.image,
            attributes: data.attributes,
        });
        console.log('NFT uploaded to IPFS with URL:', metadata.url);
        return metadata;
    } catch (error) {
        console.error('Error uploading NFT to IPFS:', error);
        throw error;
    }
}

// helper function to change URL ips to https
export function formatIPFSUrl(ipfsUrl: string) {
    if(!ipfsUrl) return "";
    if(ipfsUrl.startsWith("http")) return ipfsUrl;
    return ipfsUrl.replace("ipfs://", "https://nftstorage.link/ipfs/");
}