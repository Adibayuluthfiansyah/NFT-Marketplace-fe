---
name: Backend Integration Task
about: Track smart contract integration tasks for the frontend
title: '[INTEGRATION] '
labels: 'backend-integration, high-priority'
assignees: ''
---

## 🎯 Integration Goal

<!-- Clear description of what needs to be integrated -->


## 📄 Smart Contract Details

### Contract Information

**Contract:** 
<!-- e.g., NFTMarketplace, MarketPlaceNFT -->

**Function Name:**
<!-- e.g., listItem, buyItem, cancelListing -->

**Function Type:**
- [ ] Read Operation (view/pure function)
- [ ] Write Operation (transaction)

**Contract Address:**
<!-- Add testnet address -->
```
Sepolia: 0x...
Mainnet: (not deployed yet)
```

### Function Signature

<!-- Paste the Solidity function signature -->

```solidity
function functionName(
    address param1,
    uint256 param2
) external returns (returnType);
```

### Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `param1` | `address` | Description | `0x123...` |
| `param2` | `uint256` | Description | `1000000000000000000` (1 ETH) |

### Return Values

| Name | Type | Description |
|------|------|-------------|
| `returnValue` | `uint256` | Description |

### Events Emitted

<!-- List events that this function emits -->

```solidity
event EventName(
    address indexed param1,
    uint256 param2
);
```

## 🔗 Frontend Integration Details

### Affected Component/Page

**Component:**
<!-- e.g., NFTCard, BuyButton, ListingForm -->

**Page:**
<!-- e.g., /nft/[id], /profile, /explore -->

**File Location:**
<!-- e.g., components/ui/nft/NFTCard.tsx -->

### User Flow

<!-- Describe the user interaction flow -->

1. User clicks "Buy Now" button
2. Wallet prompts for transaction approval
3. Loading state while transaction is pending
4. Success message when transaction confirms
5. UI updates to reflect new state

### Required Hook Implementation

**Hook Name:**
<!-- e.g., useBuyNFT, useListItem, useMarketplaceStats -->

**Hook Type:**
- [ ] `useReadContract` (Wagmi) - for read operations
- [ ] `useWriteContract` (Wagmi) - for write operations
- [ ] `useContractEvent` (Wagmi) - for event listening
- [ ] Custom hook combining multiple operations

**Hook Location:**
<!-- e.g., app/hooks/useMarketplace.ts -->

### Example Implementation

```typescript
// Example hook structure
import { useReadContract } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/app/constant';

export function useExample() {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'functionName',
    args: [param1, param2],
  });

  return { data, isLoading, error };
}
```

## ✅ Implementation Checklist

### 1. Setup & Configuration

- [ ] Contract ABI added to `app/constant/index.ts`
- [ ] Contract address configured in constants
- [ ] Environment variables set (if needed)

### 2. Hook Implementation

- [ ] Create custom hook in `app/hooks/`
- [ ] Implement Wagmi hook (read/write)
- [ ] Add proper TypeScript types
- [ ] Handle loading states
- [ ] Handle error states
- [ ] Add success callbacks

### 3. Component Integration

- [ ] Import hook in component
- [ ] Connect hook to UI elements
- [ ] Display loading state (spinner, skeleton, disabled button)
- [ ] Display error messages (toast, inline error)
- [ ] Display success feedback (toast, modal, UI update)
- [ ] Update UI after successful operation

### 4. User Experience

- [ ] Add loading indicators
- [ ] Add error handling with user-friendly messages
- [ ] Add success notifications (Sonner toast)
- [ ] Disable interactions during loading
- [ ] Show transaction hash/link to explorer
- [ ] Update data after transaction confirms

### 5. Edge Cases

- [ ] Handle wallet not connected
- [ ] Handle insufficient funds
- [ ] Handle rejected transactions
- [ ] Handle network mismatch
- [ ] Handle contract errors/reverts
- [ ] Handle pending transactions

### 6. Testing

- [ ] Test on testnet (Sepolia)
- [ ] Test with different wallets
- [ ] Test error scenarios
- [ ] Test with slow network
- [ ] Test transaction confirmation flow
- [ ] Manual testing checklist completed

### 7. Documentation

- [ ] Add JSDoc comments to hook
- [ ] Update component documentation
- [ ] Add usage example
- [ ] Document required props/params

## 📚 Resources

### Backend Repository

**Link:** [NFT-Marketplace-be](https://github.com/YOUR-USERNAME/NFT-Marketplace-be)

**Contract File:**
<!-- e.g., contracts/NFTMarketplace.sol -->

**Test File:**
<!-- e.g., test/NFTMarketplace.ts -->

### Documentation

**Wagmi Docs:**
- Read Contract: https://wagmi.sh/react/hooks/useReadContract
- Write Contract: https://wagmi.sh/react/hooks/useWriteContract
- Contract Event: https://wagmi.sh/react/hooks/useContractEvent

**Viem Docs:**
- Contract Interaction: https://viem.sh/docs/contract/readContract.html

**Related Issues:**
- Depends on #
- Related to #

## 🎨 UI/UX Considerations

### Loading State

<!-- How should loading be displayed? -->
- [ ] Button disabled with spinner
- [ ] Skeleton loader
- [ ] Loading overlay
- [ ] Progress indicator

### Success State

<!-- How should success be communicated? -->
- [ ] Toast notification
- [ ] Modal dialog
- [ ] Inline success message
- [ ] Redirect to another page
- [ ] Update component data

### Error State

<!-- How should errors be displayed? -->
- [ ] Toast with error message
- [ ] Inline error below button
- [ ] Error modal
- [ ] Console error log

### Transaction Details

<!-- Should we show transaction details? -->
- [ ] Show gas estimate
- [ ] Show transaction hash
- [ ] Link to block explorer
- [ ] Show confirmation progress

## 🔍 Testing Checklist

### Manual Testing

- [ ] Function works on Sepolia testnet
- [ ] Loading states display correctly
- [ ] Error handling works properly
- [ ] Success feedback is clear
- [ ] UI updates after transaction
- [ ] Transaction link works
- [ ] Wallet connection required
- [ ] Gas estimation displayed (if applicable)

### Edge Case Testing

- [ ] Wallet disconnected during transaction
- [ ] Insufficient gas
- [ ] Transaction reverted
- [ ] Network switched during transaction
- [ ] Multiple quick clicks handled

## 💡 Implementation Notes

<!-- Any specific notes, gotchas, or considerations -->


## ⚠️ Known Issues / Blockers

<!-- Any blockers or dependencies? -->


## ✋ Assignment

**Developer:**
<!-- Who is working on this? -->

**Status:**
- [ ] Not started
- [ ] In progress
- [ ] Testing
- [ ] Ready for review
- [ ] Completed

**Estimated Effort:**
<!-- How long do you think this will take? -->
- [ ] Small (< 4 hours)
- [ ] Medium (4-8 hours)
- [ ] Large (1-3 days)
- [ ] Very Large (> 3 days)

---

## 📝 Additional Context

<!-- Any other information that would be helpful -->


---

**This is a HIGH PRIORITY task for the project!** 🔥

Backend integration is critical for the marketplace to function. Thank you for helping bring this feature to life!
