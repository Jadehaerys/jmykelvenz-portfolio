import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import type { ButtonVariant, ButtonSize } from "../../types";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
  href?: never;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const base =
  "inline-flex items-center justify-center gap-2 font-body font-semibold tracking-tight rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-light active:scale-[0.98] focus-visible:outline-accent",
  secondary:
    "bg-warm text-bg hover:bg-warm-light active:scale-[0.98] focus-visible:outline-warm",
  ghost:
    "bg-transparent border border-border text-text hover:bg-surface-card active:scale-[0.98] focus-visible:outline-text",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-base px-8 py-4",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, ...rest } = props as ButtonAsAnchor & { as: "a"; variant?: ButtonVariant; size?: ButtonSize };
    return <a className={cls} {...rest} />;
  }

  const { as: _as, variant: _v, size: _s, ...rest } = props as ButtonAsButton & { as?: "button"; variant?: ButtonVariant; size?: ButtonSize };
  return <button className={cls} {...rest} />;
}
