interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-2 font-body font-semibold text-xs tracking-[0.14em] uppercase
        ${light ? "text-dark-muted" : "text-muted"}
        ${className}
      `}
    >
      <span
        className={`block h-px w-6 ${light ? "bg-dark-muted" : "bg-muted"}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
