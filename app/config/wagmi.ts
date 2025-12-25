import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, hardhat } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

// GET ID FROM WalletConnect
const projectId = "PROJECT_ID"

export const config = getDefaultConfig({
  appName: 'NFT Marketplace',
  projectId,
  chains: [hardhat, sepolia, mainnet],
  transports: {
    [hardhat.id]: http(),
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  },
  ssr: true,
})