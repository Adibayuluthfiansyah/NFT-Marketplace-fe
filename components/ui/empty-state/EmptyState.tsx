import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      {/* Icon */}
      <div className="w-20 h-20 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-gray-500" />
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-400 max-w-md mb-8">
        {description}
      </p>
      
      {/* Action Button (Optional) */}
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all hover:scale-105"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
