# Contributing to NFT Marketplace Frontend

First off, thank you for considering contributing to the NFT Marketplace Frontend! 🎉

This project is a learning journey into Web3 development, and we welcome contributors of all skill levels. Whether you're a seasoned developer or just starting with Web3, your contributions are valued.

## 📋 Table of Contents

- [Project Status](#project-status)
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Priority Areas](#priority-areas)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Community](#community)

---

## 🚧 Project Status

**Current Phase**: UI/UX Refinement (95%) + Backend Integration (Starting)

### What's Done ✅

- Complete UI/UX for all major pages
- Component architecture and reusable system
- Animation and interaction design
- Responsive layouts
- Wagmi/RainbowKit configuration

### What Needs Help 🆘

1. **Backend Integration (HIGH PRIORITY!)** 🔥
   - Implementing Wagmi hooks for contract reads/writes
   - Wallet connection flows
   - Transaction state management
   - Error handling

2. **Testing Framework Setup**
   - Setting up Vitest + React Testing Library
   - Writing initial test suite
   - E2E test configuration

3. **UI/UX Refinements**
   - Animation polish
   - Mobile optimization
   - Accessibility improvements

4. **Documentation**
   - Component documentation
   - Usage examples
   - Tutorial content

---

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

**TL;DR**: Be respectful, inclusive, and professional. We're all here to learn and build together.

---

## 💡 How Can I Contribute?

### 🐛 Reporting Bugs

Found a bug? Help us improve by reporting it!

1. **Check existing issues** - Someone might have already reported it
2. **Use the bug report template** - Click "New Issue" → "Bug Report"
3. **Provide details**:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and device information
   - Screenshots or video if applicable

**Note**: For security vulnerabilities, please follow our [Security Policy](.github/SECURITY.md) instead of opening a public issue.

### ✨ Suggesting Features

Have an idea to make the UI/UX better?

1. **Check existing issues** - It might already be proposed
2. **Use the feature request template** - Click "New Issue" → "Feature Request"
3. **Describe your idea**:
   - What problem does it solve?
   - How should it work?
   - Mockups or examples if available
   - Any implementation ideas?

### 🔗 Backend Integration Tasks

Want to help connect the frontend to smart contracts?

1. **Check backend integration issues** - Look for `backend-integration` label
2. **Use the integration template** - Click "New Issue" → "Backend Integration"
3. **Areas for contribution**:
   - Read operations (fetch NFTs, user data, stats)
   - Write operations (list, buy, cancel)
   - Event listeners (real-time updates)
   - IPFS integration

### 💻 Contributing Code

We welcome code contributions! Here's how:

**Good First Issues**: Look for issues labeled `good-first-issue` - these are great for newcomers!

**Priority Areas** (see details below):
- Backend integration (highest priority)
- Testing setup and implementation
- UI/UX refinements
- Performance optimization
- Documentation

### 📝 Improving Documentation

Documentation is crucial for collaboration:

- Fix typos or unclear explanations
- Add code examples
- Improve component documentation
- Create usage guides or tutorials
- Translate documentation (if applicable)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** or **yarn**
- **Git** for version control
- Basic understanding of:
  - React 19 and Next.js 16 App Router
  - TypeScript
  - Tailwind CSS
  - (Optional) Web3/Ethereum basics for backend integration

### Fork & Clone

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/NFT-Marketplace-fe.git
   cd NFT-Marketplace-fe
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/NFT-Marketplace-fe.git
   ```

### Setup Development Environment

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local  # If .env.example exists
# Or create .env.local manually

# Add required environment variables
# NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# Run development server
npm run dev
```

If the server starts successfully at `http://localhost:3000`, you're ready to contribute! 🎉

---

## 🔄 Development Workflow

We use **GitHub Flow** - a simple, branch-based workflow:

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
```

**Branch naming convention**:
- `feature/description` - New features (e.g., `feature/nft-filtering`)
- `fix/description` - Bug fixes (e.g., `fix/mobile-navbar`)
- `integration/description` - Backend integration (e.g., `integration/list-nft`)
- `docs/description` - Documentation (e.g., `docs/component-guide`)
- `test/description` - Test additions (e.g., `test/nft-card-tests`)
- `refactor/description` - Code refactoring (e.g., `refactor/button-variants`)
- `style/description` - UI/styling changes (e.g., `style/improve-animations`)
- `chore/description` - Maintenance tasks (e.g., `chore/update-deps`)

### 2. Make Your Changes

- Write clean, readable code
- Follow the project's coding standards (see below)
- Test your changes in the browser
- Keep commits focused and atomic
- Update documentation if needed

### 3. Test Your Changes

Before committing, make sure:

```bash
# Development server runs without errors
npm run dev

# Build succeeds
npm run build

# No TypeScript errors
npx tsc --noEmit

# No ESLint errors
npm run lint

# Test on different screen sizes (mobile, tablet, desktop)
# Test with different browsers (Chrome, Firefox, Safari)
# Test wallet connection (if applicable)
```

### 4. Commit Your Changes

Follow our commit message guidelines (see below):

```bash
git add .
git commit -m "feat: add NFT filtering functionality"
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template completely
5. Submit the PR

---

## 📏 Coding Standards

### TypeScript Guidelines

**Strict Mode**: Always enabled. Never use `any` types.

**Type Definitions**:
```typescript
// Use interface for data structures
export interface NFTItem {
  tokenId: number;
  name: string;
  description: string;
  image: string;
  price: string;
  seller: string;
  owner: string;
  isSold: boolean;
}

// Use type for component props
interface NFTCardProps {
  item: NFTItem;
  variant?: "explore" | "featured" | "profile";
  onBuy?: (id: number) => void;
}

// Union types for variants
type Variant = "default" | "outline" | "ghost";
```

**Best Practices**:
- Use optional chaining: `user?.address`
- Properly handle nullable types
- Use generic types for reusability
- Export types from `app/types/` folder

### Component Guidelines

**File Naming**: PascalCase for components
```
components/
  ui/
    nft/
      NFTCard.tsx          ✅
      NFTImage.tsx         ✅
      nft-card.tsx         ❌
      nftCard.tsx          ❌
```

**Component Structure**:
```typescript
"use client"; // If client component

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NFTItem } from "@/app/types";
import { cn } from "@/lib/utils";

interface NFTCardProps {
  item: NFTItem;
  className?: string;
}

export function NFTCard({ item, className }: NFTCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <motion.div
      className={cn("rounded-lg border p-4", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Component content */}
    </motion.div>
  );
}
```

**Client vs Server Components**:
- Use `"use client"` only when necessary (state, effects, browser APIs)
- Keep server components default when possible
- Use server actions for data mutations (when available)

### Naming Conventions

**Variables & Functions**: camelCase
```typescript
const nftList = [];
const userName = "Alice";
function fetchNFTData() {}
const handleBuyClick = () => {};
```

**Booleans**: Use `is`, `has`, `should` prefixes
```typescript
const isLoading = true;
const hasWallet = false;
const shouldShowModal = true;
const canPurchase = user?.balance > nft.price;
```

**Event Handlers**: Use `on` or `handle` prefix
```typescript
const onClick = () => {};
const onModalClose = () => {};
const handleSubmit = () => {};
const handleNFTBuy = () => {};
```

**Components**: PascalCase
```typescript
export const NFTCard = () => {};
export const UniversalNFTCard = () => {};
export function WalletButton() {}
```

**Constants**: UPPER_SNAKE_CASE
```typescript
export const CONTRACT_ADDRESS = "0x...";
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const SUPPORTED_NETWORKS = [1, 11155111];
```

### Import Order

Always follow this order:

```typescript
// 1. External libraries (React, Next.js, third-party)
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// 2. Internal components (using @/ alias)
import { Navbar } from "@/components/ui/layout/Navbar";
import { Button } from "@/components/ui/button";
import { UniversalNFTCard } from "@/components/ui/common";

// 3. Types
import { NFTItem } from "@/app/types";

// 4. Utilities & Configs
import { cn } from "@/lib/utils";
import { CONTRACT_ADDRESS } from "@/app/constant";

// 5. Styles (if any separate CSS files)
import "./styles.css";
```

**Always use `@/` path alias** for imports:
```typescript
import { Button } from "@/components/ui/button";     // ✅
import { Button } from "../../components/ui/button"; // ❌
```

### Styling Conventions

**Tailwind CSS**: Utility-first approach

```tsx
// Good - semantic grouping
className="flex items-center gap-4 px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg transition-colors"

// Use cn() for conditional classes
import { cn } from "@/lib/utils";

className={cn(
  "base-classes-here",
  variant === "primary" && "primary-variant-classes",
  isActive && "active-state-classes",
  className // Allow className prop override
)}
```

**Responsive Design**:
```tsx
className="text-sm md:text-base lg:text-lg"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
```

**Dark Mode** (if applicable):
```tsx
className="bg-white dark:bg-gray-900 text-black dark:text-white"
```

### Animation Guidelines

**Framer Motion**: Keep animations smooth and purposeful

```typescript
// Good - subtle and fast
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>

// Avoid - too slow, distracting
<motion.div
  initial={{ opacity: 0, scale: 0, rotate: 360 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 2, type: "spring", bounce: 0.8 }}
>
```

**Animation Duration**: Keep under 0.5s for better UX
**Use `transition` prop** for timing control
**Respect `prefers-reduced-motion`** when possible

---

## 📝 Commit Message Guidelines

We follow **Conventional Commits** for clear and consistent commit history.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring (no functional changes)
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (dependencies, config, etc.)
- **integration**: Backend/contract integration

### Scope (Optional)

The scope specifies what part of the codebase is affected:
- `nft` - NFT-related features
- `wallet` - Wallet functionality
- `ui` - UI components
- `landing` - Landing page
- `profile` - Profile page
- `explore` - Explore page
- `create` - Create/mint page
- `stats` - Statistics page
- `integration` - Backend integration
- `docs` - Documentation

### Examples

```bash
# Good commit messages
feat(nft): add filtering by price range
fix(wallet): resolve connection issue on mobile
integration(marketplace): implement listItem functionality
docs(readme): add environment variables section
style(landing): improve hero section animations
refactor(ui): extract reusable NFTCard component
perf(explore): optimize image loading with priority
test(nft): add tests for NFTCard component

# Bad commit messages
❌ update stuff
❌ fix bug
❌ changes
❌ WIP
❌ asdfasdf
```

### Rules

1. **Use imperative mood**: "add" not "added" or "adds"
2. **Keep subject line under 72 characters**
3. **Capitalize the subject line**
4. **Don't end subject with a period**
5. **Separate subject from body with a blank line**
6. **Explain what and why, not how** (in the body)

---

## 🔍 Pull Request Process

### Before Creating a PR

✅ **Checklist**:
- [ ] Code compiles without errors (`npm run build`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Tested in browser (multiple screen sizes)
- [ ] Code follows style guidelines
- [ ] Commits follow commit message guidelines
- [ ] No merge conflicts with `main`
- [ ] Documentation updated (if applicable)
- [ ] Self-review completed

### PR Title

Use the same format as commit messages:

```
feat(nft): add filtering functionality
fix(mobile): resolve navbar overflow issue
integration: implement buy NFT functionality
docs: update contribution guidelines
```

### PR Description

Fill out the PR template completely:
- **Description**: What does this PR do?
- **Type of change**: Feature, bug fix, integration, etc.
- **Related issues**: Link to related issues (closes #123)
- **Testing**: How was this tested?
- **Screenshots**: If UI changes (required for UI work)
- **Checklist**: Complete all items

### Code Review Process

1. **Automated checks**: Build must succeed
2. **Review requested**: At least 1 maintainer will review
3. **Address feedback**: Respond to comments and make requested changes
4. **Approval**: Once approved, a maintainer will merge
5. **Celebration**: Your contribution is merged! 🎉

**Review timeline**: We aim to review PRs within 2-3 business days.

### After Your PR is Merged

1. **Delete your branch** (GitHub will prompt)
2. **Update your fork**:
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```
3. **Celebrate!** 🎉 You've contributed to the project!

---

## 🎯 Priority Areas

### 1. Backend Integration (HIGHEST PRIORITY) 🔥

**Skills needed**: React, TypeScript, Wagmi/Viem basics

**Tasks**:
- Implement Wagmi hooks for reading contract data
- Implement write operations (list, buy, cancel)
- Add transaction state management
- Handle errors and provide user feedback
- Add loading states during transactions

**Getting Started**:
1. Check issues labeled `backend-integration` and `high-priority`
2. Review backend smart contracts in `NFT-Marketplace-be` repo
3. Check Wagmi documentation: https://wagmi.sh/
4. Start with read operations (easier than writes)

**Example Task**: Implement "Get All Listed NFTs"
```typescript
// app/hooks/useListedNFTs.ts
import { useReadContract } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/app/constant';

export function useListedNFTs() {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getAllListedNFTs',
  });

  return { nfts: data, isLoading, error };
}
```

### 2. Testing Framework Setup

**Skills needed**: Testing experience (Vitest, Jest, React Testing Library)

**Tasks**:
- Set up Vitest + React Testing Library
- Configure test environment
- Write initial test suite for components
- Set up E2E testing with Playwright
- Add test coverage reporting

**Getting Started**:
1. Check issues labeled `testing`
2. Review testing best practices for Next.js 16
3. Start with simple component tests

### 3. UI/UX Refinements

**Skills needed**: CSS, Tailwind, design sense

**Tasks**:
- Polish animations and transitions
- Improve mobile responsiveness
- Fix layout issues
- Enhance accessibility (ARIA labels, keyboard navigation)
- Dark mode improvements (if applicable)

**Getting Started**:
1. Check issues labeled `ui`, `style`, or `a11y`
2. Test the app on different devices
3. Look for visual inconsistencies

### 4. Documentation

**Skills needed**: Technical writing, understanding of project

**Tasks**:
- Document components and their props
- Add usage examples
- Create tutorial content
- Improve README sections
- Add inline code comments for complex logic

**Getting Started**:
1. Check issues labeled `documentation`
2. Look for undocumented components
3. Identify confusing sections in docs

---

## 🧪 Testing Guidelines

### Current Status

**Testing framework is not yet set up.** This is a great opportunity to contribute!

### Planned Testing Stack

- **Unit Tests**: Vitest + React Testing Library
- **E2E Tests**: Playwright
- **Coverage**: 80%+ target

### When Tests Are Available

**Test Coverage Goals**:
- All new features should include tests
- Bug fixes should include regression tests
- Critical user flows must be tested (wallet connection, NFT purchase, etc.)

**Writing Tests** (future):
```typescript
// Example component test
import { render, screen } from '@testing-library/react';
import { NFTCard } from '@/components/ui/nft/NFTCard';

describe('NFTCard', () => {
  it('should render NFT name and price', () => {
    const mockNFT = {
      tokenId: 1,
      name: 'Cool NFT',
      price: '1.5',
      image: '/test.jpg',
      // ...
    };

    render(<NFTCard item={mockNFT} />);

    expect(screen.getByText('Cool NFT')).toBeInTheDocument();
    expect(screen.getByText('1.5 ETH')).toBeInTheDocument();
  });
});
```

---

## 📚 Documentation

Good documentation is essential!

### What to Document

- **Component Props**: Use JSDoc comments
  ```typescript
  interface ButtonProps {
    /** The button label text */
    children: React.ReactNode;
    /** Button style variant */
    variant?: "default" | "outline" | "ghost";
    /** Click handler */
    onClick?: () => void;
  }
  ```

- **Complex Logic**: Add inline comments explaining why
  ```typescript
  // Using memo to prevent unnecessary re-renders when parent updates
  // This component has expensive animations
  export const NFTCard = memo(NFTCardComponent);
  ```

- **Hooks**: Document parameters and return values
  ```typescript
  /**
   * Hook to fetch all listed NFTs from the marketplace
   * @returns {Object} nfts - Array of listed NFT items
   * @returns {boolean} isLoading - Loading state
   * @returns {Error} error - Error if fetch failed
   */
  export function useListedNFTs() {
    // ...
  }
  ```

### Updating Documentation

When you:
- Add a feature → Update README
- Create a hook → Document usage
- Change UI → Update screenshots
- Add config → Update setup instructions

---

## 💬 Community

### Where to Ask Questions

- **GitHub Discussions**: General questions, ideas, discussions
- **GitHub Issues**: Bug reports, feature requests
- **Pull Requests**: Code-specific questions

### Communication Guidelines

- **Be respectful**: Treat everyone with respect
- **Be patient**: Maintainers are often volunteers
- **Be clear**: Provide context and details
- **Be helpful**: Help others when you can
- **Be constructive**: Focus on solutions

### Getting Help

**Stuck on something?**
1. Check existing documentation (README, this guide)
2. Search existing issues and discussions
3. Ask in GitHub Discussions
4. Be specific about your problem (error messages, what you tried, etc.)

**Want to help others?**
- Answer questions in Discussions
- Review pull requests
- Improve documentation
- Triage issues

---

## 🎯 Issue and PR Labels

We use labels to organize work:

### Priority
- `priority: critical` - Must be fixed immediately
- `priority: high` - Important, fix soon
- `priority: medium` - Fix when possible
- `priority: low` - Nice to have

### Type
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `question` - Further information requested
- `backend-integration` - Smart contract integration

### Status
- `good-first-issue` - Good for newcomers
- `help-wanted` - Extra attention needed
- `blocked` - Waiting on something else
- `wip` - Work in progress

### Area
- `ui` - UI components
- `integration` - Backend integration
- `testing` - Test related
- `performance` - Performance improvements
- `a11y` - Accessibility

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (ISC License).

---

## 🙏 Thank You!

Thank you for taking the time to contribute! Every contribution, no matter how small, helps make this project better.

**Questions?** Feel free to open an issue or discussion. We're here to help! 😊

---

**Happy Coding!** 🚀

Made with ❤️ by the NFT Marketplace community
