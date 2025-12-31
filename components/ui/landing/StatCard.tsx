interface StatCardProps {
  value: string;
  label: string;
  index?: number;
}

export function StatCard({ value, label, index = 0 }: StatCardProps) {
  return (
    <div
      className="group relative p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Number */}
      <p className="text-4xl md:text-5xl font-black text-foreground group-hover:text-primary transition-colors mb-2">
        {value}
      </p>
      
      {/* Label */}
      <p className="text-sm text-muted-foreground font-semibold">
        {label}
      </p>

      {/* Animated Background Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-purple-600/0 group-hover:from-primary/20 group-hover:to-purple-600/20 blur-xl transition-all duration-500 -z-10" />
    </div>
  );
}
