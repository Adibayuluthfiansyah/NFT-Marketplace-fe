# NFT Marketplace - Frontend

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

> A modern, beautiful NFT marketplace frontend built with Next.js 16, featuring stunning UI/UX and Web3 integration.

---

## 🚧 Project Status

**Current Phase:** UI/UX Refinement & Backend Integration

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 1** | 🟢 95% Complete | UI/UX Design & Implementation |
| **Phase 2** | 🟡 In Progress | Smart Contract Integration |
| **Phase 3** | ⚪ Planned | Testing & Quality Assurance |
| **Phase 4** | ⚪ Planned | Deployment & Launch |

### ⚠️ Development Status

This is an **active development project** for learning and portfolio purposes:

- ✅ **Complete**: Core UI/UX implementation, component architecture, animations
- 🔄 **In Progress**: Backend integration, wallet functionality, contract interactions
- 📅 **Planned**: Testing framework, accessibility improvements, performance optimization

**Not ready for production use.** For educational and development purposes only.

---

## 📖 Overview

A full-featured NFT marketplace frontend that enables users to:

- 🎨 **Browse & Discover** - Explore trending NFTs with beautiful animations
- 💼 **Connect Wallet** - Seamless wallet connection with RainbowKit
- 🖼️ **Mint & Create** - Create and list your own NFTs
- 💰 **Buy & Sell** - Trade NFTs on the marketplace
- 👤 **Manage Profile** - View your collection and transaction history
- 📊 **View Stats** - Real-time marketplace statistics and analytics

### ✨ Key Features

- **Modern Design**: Dark-mode focused with smooth animations
- **3D Graphics**: Three.js powered hero section
- **Responsive**: Mobile-first design that works on all devices
- **Type-Safe**: Full TypeScript coverage with strict mode
- **Web3 Ready**: Wagmi + RainbowKit + Viem integration
- **Optimized**: Server-side rendering and image optimization
- **Accessible**: Built with Radix UI primitives

---

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components & Styling

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components (shadcn/ui)
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[Recharts](https://recharts.org/)** - Composable charting library
- **[Class Variance Authority](https://cva.style/)** - Component variants system

### Web3 Integration

- **[Wagmi v2](https://wagmi.sh/)** - React Hooks for Ethereum
- **[RainbowKit v2](https://www.rainbowkit.com/)** - Best-in-class wallet connection
- **[Viem v2](https://viem.sh/)** - TypeScript Ethereum library

### Forms & Data Management

- **[React Hook Form](https://react-hook-form.com/)** - Performant form library
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[TanStack Query](https://tanstack.com/query/)** - Powerful data synchronization

### 3D Graphics

- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F

### Additional Libraries

- **[Sonner](https://sonner.emilkowal.ski/)** - Opinionated toast component
- **[NFT.Storage](https://nft.storage/)** - IPFS storage for NFT metadata
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **npm** >= 9.x or **yarn** >= 1.22.x
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/NFT-Marketplace-fe.git
   cd NFT-Marketplace-fe
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # WalletConnect Project ID (required)
   # Get yours at: https://cloud.walletconnect.com/
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

   # Smart Contract Address (will be added after deployment)
   NEXT_PUBLIC_CONTRACT_ADDRESS=0x...

   # Network Configuration (optional)
   NEXT_PUBLIC_CHAIN_ID=1  # 1 for mainnet, 11155111 for Sepolia

   # IPFS/NFT Storage (optional)
   NEXT_PUBLIC_NFT_STORAGE_KEY=your_nft_storage_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables Explained

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | ✅ Yes | WalletConnect Cloud project ID for wallet connections |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | 🔄 Soon | NFT Marketplace smart contract address |
| `NEXT_PUBLIC_CHAIN_ID` | ⚪ Optional | Network to connect to (default: Sepolia testnet) |
| `NEXT_PUBLIC_NFT_STORAGE_KEY` | ⚪ Optional | API key for IPFS metadata storage |

---

## 📁 Project Structure

```
NFT-Marketplace-fe/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Landing page (/)
│   ├── layout.tsx             # Root layout with providers
│   ├── config/                # Configuration files
│   │   └── wagmi.ts          # Wagmi/Web3 configuration
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts          # Shared types (NFTItem, etc.)
│   ├── constant/              # Constants and contract ABIs
│   │   └── index.ts          # Contract addresses, ABIs
│   ├── utils/                 # Utility functions
│   │   └── generator.ts      # Helper functions
│   ├── explore/               # Explore NFTs page
│   ├── nft/[id]/             # NFT detail page (dynamic route)
│   ├── profile/               # User profile page
│   ├── wallet/                # Wallet management page
│   ├── create/                # Create/Mint NFT page
│   ├── stats/                 # Marketplace statistics
│   └── resources-page/        # Resources & documentation
├── components/                # React components
│   └── ui/                   # UI components organized by feature
│       ├── layout/           # Layout components
│       │   ├── Navbar.tsx   # Navigation bar
│       │   └── Footer.tsx   # Footer
│       ├── landing/          # Landing page components
│       │   ├── Hero3D.tsx   # 3D hero section
│       │   ├── StatCard.tsx # Statistics display
│       │   └── ...
│       ├── common/           # Shared/reusable components
│       │   └── UniversalNFTCard.tsx  # NFT card component
│       ├── nft/              # NFT-specific components
│       │   ├── NFTImage.tsx
│       │   ├── NFTHeader.tsx
│       │   └── ...
│       ├── wallet/           # Wallet-related components
│       ├── loading/          # Loading states & skeletons
│       └── animations/       # Animation wrappers
├── lib/                      # Utility libraries
│   └── utils.ts             # Helper functions (cn, etc.)
├── public/                   # Static assets
│   ├── images/              # Images and icons
│   └── fonts/               # Custom fonts (if any)
├── .github/                  # GitHub configuration
│   ├── ISSUE_TEMPLATE/      # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── .gitignore               # Git ignore rules
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies & scripts
├── README.md                # This file
├── CONTRIBUTING.md          # Contribution guidelines
└── CODE_OF_CONDUCT.md       # Community guidelines
```

---

## 🎨 Pages & Features

### 🏠 Landing Page (`/`)

- **Hero Section**: 3D animated background with call-to-action
- **Featured NFTs**: Showcase trending collections
- **Statistics**: Real-time marketplace metrics
- **How It Works**: Step-by-step guide
- **Why Choose Us**: Feature highlights

**Status**: ✅ UI Complete | 🔄 Backend integration pending

### 🔍 Explore Page (`/explore`)

- **Grid View**: Browse all available NFTs
- **Filters**: Filter by price, category, status
- **Search**: Find specific NFTs
- **Sorting**: Sort by price, newest, trending

**Status**: ✅ UI Complete | 🔄 Backend integration pending

### 🖼️ NFT Detail Page (`/nft/[id]`)

- **NFT Preview**: High-quality image display
- **Metadata**: Name, description, properties
- **Price Information**: Current price, price history
- **Owner Information**: Seller profile
- **Action Buttons**: Buy, Make Offer (coming soon)
- **Related NFTs**: Similar items in collection

**Status**: ✅ UI Complete | 🔄 Backend integration pending

### 👤 Profile Page (`/profile`)

- **User Info**: Avatar, username, wallet address
- **Owned NFTs**: Grid of owned items
- **Listed NFTs**: Currently listed for sale
- **Activity History**: Transaction history (planned)

**Status**: ✅ UI Complete | 🔄 Backend integration pending

### 💼 Wallet Page (`/wallet`)

- **Balance Display**: ETH balance
- **Quick Actions**: Send, receive, swap (planned)
- **Transaction History**: Recent transactions
- **Connected Wallets**: Manage connections

**Status**: ✅ UI Complete | 🔄 Backend integration pending

### 🎨 Create Page (`/create`)

- **Upload Form**: Image upload with preview
- **Metadata Input**: Name, description, properties
- **Pricing**: Set initial listing price
- **IPFS Upload**: Metadata storage (pending)

**Status**: ✅ UI Complete | 🔄 Backend integration pending

### 📊 Stats Page (`/stats`)

- **Trading Volume**: Daily/weekly/monthly charts
- **Top Collections**: Most traded collections
- **Top Sellers**: Highest earning sellers
- **Market Trends**: Analytics dashboard

**Status**: ✅ UI Complete | 🔄 Backend integration pending

---

## 🔗 Backend Integration Status

### ✅ Completed

- [x] Project structure and setup
- [x] All page UI/UX implementation
- [x] Component architecture
- [x] Animation system
- [x] Responsive design
- [x] Wagmi/RainbowKit configuration
- [x] Type definitions for NFT data

### 🔄 In Progress

- [ ] Wagmi hooks implementation
- [ ] Smart contract read operations
  - [ ] Get listed NFTs
  - [ ] Get NFT details
  - [ ] Get user NFTs
  - [ ] Get marketplace stats
- [ ] Smart contract write operations
  - [ ] List NFT
  - [ ] Buy NFT
  - [ ] Cancel listing
  - [ ] Update listing
- [ ] Wallet connection flow
- [ ] Transaction state management
- [ ] Error handling & user feedback

### 📅 Planned

- [ ] Event listeners for real-time updates
- [ ] IPFS metadata upload/retrieval
- [ ] Image optimization & caching
- [ ] Search & filter functionality
- [ ] Notification system
- [ ] Unit tests (Vitest/Jest)
- [ ] Component tests (React Testing Library)
- [ ] E2E tests (Playwright)
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] SEO optimization

---

## 🧪 Development Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000
npm run dev -- -p 3001  # Start on different port

# Building
npm run build        # Create production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically

# Type Checking
npx tsc --noEmit     # Check TypeScript errors
```

### Build Output

```bash
npm run build
```

Creates optimized production build in `.next/` directory:
- Static pages are pre-rendered at build time
- Server components reduce client-side JavaScript
- Images are automatically optimized
- CSS is minified and split

---

## 🎯 Roadmap

### 📅 Q1 2025 - Foundation Complete

- [x] ~~Project setup and configuration~~
- [x] ~~UI/UX design and implementation~~
- [x] ~~Component library creation~~
- [x] ~~Page routing and navigation~~
- [ ] **Backend integration (current focus)**

### 📅 Q2 2025 - Core Features

- [ ] Smart contract integration
- [ ] Wallet functionality
- [ ] NFT minting and listing
- [ ] Buy/sell transactions
- [ ] IPFS integration
- [ ] Testing suite implementation

### 📅 Q3 2025 - Enhancement & Testing

- [ ] Search and filtering
- [ ] Advanced features (auctions, offers)
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Comprehensive testing
- [ ] Security audit preparation

### 📅 Q4 2025 - Launch

- [ ] Beta testing on testnet (Sepolia)
- [ ] Bug fixes and refinements
- [ ] Documentation completion
- [ ] Production deployment (if applicable)

---

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Whether you're fixing a typo, improving UI, or adding major features, your help is appreciated.

### 🎯 High Priority Areas

1. **Backend Integration** (Critical!)
   - Implement Wagmi hooks for contract interactions
   - Add wallet connection flows
   - Handle transaction states

2. **Testing**
   - Set up testing framework (Vitest + React Testing Library)
   - Write unit tests for components
   - Add E2E tests for critical flows

3. **UI/UX Polish**
   - Refine animations and transitions
   - Improve mobile responsiveness
   - Accessibility enhancements

4. **Documentation**
   - Component documentation
   - Code examples
   - Tutorial guides

### 📚 Resources

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Detailed contribution guidelines
- **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** - Community standards
- **[Backend Repository](https://github.com/YOUR-USERNAME/NFT-Marketplace-be)** - Smart contracts
- **[AGENTS.md](../AGENTS.md)** - AI agent guidelines (monorepo root)

### 🐛 Found a Bug?

Open an issue using our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).

### 💡 Have an Idea?

Share your ideas using our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md).

---

## 🧪 Testing (Coming Soon)

Testing framework setup is planned. Planned testing stack:

- **Unit Tests**: Vitest + React Testing Library
- **E2E Tests**: Playwright
- **Coverage**: 80%+ target

Contributions to set up testing are highly welcome!

---

## 🎨 Design System

### Color Palette

The design uses a dark-mode first approach with OKLCH color space:

- **Background**: `#191022` (deep purple-black)
- **Primary**: `#5a0bb8` (vibrant purple)
- **Accent**: OKLCH-based color system for consistency
- **Text**: High contrast for readability

### Typography

- **Display Font**: Space Grotesk - Headings and hero text
- **Body Font**: Noto Sans - Body text and UI elements
- **Code Font**: Monospace - Code snippets (if any)

### Components

All components built with:
- **Radix UI primitives** for accessibility
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **CVA (Class Variance Authority)** for variants

---

## 📦 Deployment

### Vercel (Recommended)

The easiest deployment option for Next.js apps:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Environment Variables**
   
   Add the same variables from `.env.local` to Vercel dashboard.

### Other Platforms

- **Netlify**: Supports Next.js with Edge Functions
- **AWS Amplify**: Full-stack deployment
- **Docker**: Use the included Dockerfile (if available)

**Note**: Ensure environment variables are properly configured for production!

---

## 🔒 Security

### Important Security Notices

⚠️ **This project is under active development:**

- Not audited for production use
- Backend integration incomplete
- Use testnet only (Sepolia, Goerli)
- Never expose private keys
- Always verify contract addresses

### Reporting Security Issues

If you discover a security vulnerability, please follow our [Security Policy](.github/SECURITY.md) for responsible disclosure.

**DO NOT** open a public issue for security vulnerabilities.

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

```
ISC License

Copyright (c) 2025, Adiba Yuluthfiansyah

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
```

---

## 🔗 Related Projects

- **[NFT Marketplace Backend](https://github.com/YOUR-USERNAME/NFT-Marketplace-be)** - Smart contracts (Hardhat + Solidity)
- **[AGENTS.md](../AGENTS.md)** - Monorepo coding guidelines for AI agents

---

## 📞 Contact & Community

### Questions or Feedback?

- **GitHub Issues**: [Open an issue](https://github.com/YOUR-USERNAME/NFT-Marketplace-fe/issues)
- **GitHub Discussions**: [Start a discussion](https://github.com/YOUR-USERNAME/NFT-Marketplace-fe/discussions)

### Connect

- **GitHub**: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
- **Portfolio**: [Your website if applicable]

---

## 🙏 Acknowledgments

Built with these amazing technologies:

- [Next.js](https://nextjs.org/) by Vercel
- [React](https://react.dev/) by Meta
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs
- [Wagmi](https://wagmi.sh/) & [Viem](https://viem.sh/) by Wevm
- [RainbowKit](https://www.rainbowkit.com/) by Rainbow
- [Radix UI](https://www.radix-ui.com/) by WorkOS
- [Framer Motion](https://www.framer.com/motion/) by Framer
- [shadcn/ui](https://ui.shadcn.com/) by shadcn

Special thanks to the Web3 and React communities for incredible tools and resources!

---

## ⭐ Show Your Support

If you find this project helpful or interesting:

- ⭐ **Star this repository** on GitHub
- 🔀 **Fork it** and contribute
- 🐛 **Report bugs** to help improve
- 💡 **Share ideas** for new features
- 📢 **Share with others** who might be interested

---

**Built with ❤️ for the Web3 community**

*Learning in public, building for the future.*

---

**Last Updated**: December 2025
