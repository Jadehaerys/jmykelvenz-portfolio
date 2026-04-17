// Shared TypeScript interfaces for portfolio components

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  label: string;
  description: string;
}

export interface Capability {
  icon: string;
  title: string;
  description: string;
}

export interface Principle {
  number: string;
  title: string;
  body: string;
}

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize    = "sm" | "md" | "lg";

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}
