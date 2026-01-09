import { NFTMetadata } from '../app/types/wallet';

const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT;
const PINATA_GATEWAY = process.env.NEXT_PUBLIC_PINATA_GATEWAY || "gateway.pinata.cloud";

export async function uploadNFTToIPFS(data: NFTMetadata) {
    if (!PINATA_JWT) {
        throw new Error('Pinata JWT is not defined in .env');
    }

    try {
        // upload image to pinata
        let imageCid = "";
        if (data.image) {
            const formData = new FormData();
            formData.append("file", data.image);

            const metadata = JSON.stringify({
                name: `Image - ${data.name}`,
            });
            formData.append('pinataMetadata', metadata);
            formData.append('pinataOptions', JSON.stringify({ cidVersion: 1 }));

            const imageRes = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${PINATA_JWT}`,
                },
                body: formData,
            });

            if (!imageRes.ok) throw new Error("Failed to upload image to Pinata");
            const imageJson = await imageRes.json();
            imageCid = imageJson.IpfsHash;
        }

        // make metadata object
        const nftMetadata = {
            name: data.name,
            description: data.description,
            image: `ipfs://${imageCid}`, 
            attributes: data.attributes,
        };

        // upload json metadata to pinata
        const jsonRes = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${PINATA_JWT}`,
            },
            body: JSON.stringify({
                pinataContent: nftMetadata,
                pinataMetadata: { name: `Metadata - ${data.name}` }
            }),
        });

        if (!jsonRes.ok) throw new Error("Failed to upload metadata to Pinata");
        const jsonResult = await jsonRes.json();
        
        // return metadata url for minting
        const metadataUrl = `ipfs://${jsonResult.IpfsHash}`;
        console.log('NFT Metadata uploaded to IPFS:', metadataUrl);
        
        return { url: metadataUrl };

    } catch (error) {
        console.error('Error uploading to Pinata:', error);
        throw error;
    }
}

// helper format ipfs url to gateway url
export function formatIPFSUrl(ipfsUrl: string) {
    if (!ipfsUrl) return "";
    if (ipfsUrl.startsWith("http")) return ipfsUrl;
    
    // Convert ipfs to gateway url
    const cid = ipfsUrl.replace("ipfs://", "");
    return `https://${PINATA_GATEWAY}/ipfs/${cid}`;
}