export function Logo({ className = "", size = "default" }: { className?: string; size?: "default" | "small" }) {
  const sizeClasses = {
    default: "text-2xl",
    small: "text-lg",
  }

  return <span className={`font-bold tracking-wider text-blue-600 ${sizeClasses[size]} ${className}`}>DRIVA</span>
}

