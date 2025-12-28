import { toast } from "sonner";

// Success toast
export const showSuccess = (message: string, description?: string) => {
  toast.success(message, {
    description,
    duration: 4000,
  });
};

// Error toast
export const showError = (message: string, description?: string) => {
  toast.error(message, {
    description,
    duration: 5000,
  });
};

// Info toast
export const showInfo = (message: string, description?: string) => {
  toast.info(message, {
    description,
    duration: 4000,
  });
};

// Warning toast
export const showWarning = (message: string, description?: string) => {
  toast.warning(message, {
    description,
    duration: 4000,
  });
};

// Loading toast (returns id for dismissal)
export const showLoading = (message: string) => {
  return toast.loading(message);
};

// Dismiss toast by id
export const dismissToast = (toastId: string | number) => {
  toast.dismiss(toastId);
};

// Promise toast (for async operations)
export const showPromise = <T,>(
  promise: Promise<T>,
  messages: {
    loading: string;
    success: string;
    error: string;
  }
) => {
  return toast.promise(promise, messages);
};

// Transaction toast (specific for blockchain)
export const showTransaction = {
  pending: (txHash: string) => {
    return toast.loading("Transaction Pending", {
      description: `Transaction hash: ${txHash.slice(0, 10)}...`,
      duration: Infinity,
    });
  },
  success: (txHash: string) => {
    return toast.success("Transaction Successful!", {
      description: `View on explorer: ${txHash.slice(0, 10)}...`,
      action: {
        label: "View",
        onClick: () => window.open(`https://etherscan.io/tx/${txHash}`, "_blank"),
      },
    });
  },
  error: (error: string) => {
    return toast.error("Transaction Failed", {
      description: error,
    });
  },
};
