"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const card = tv({
  base: "relative flex flex-col text-on-surface transition-colors duration-200 overflow-hidden",
  variants: {
    level: {
      0: "bg-surface",
      1: "bg-container-low rounded-xl",
      2: "bg-container rounded-lg",
      3: "bg-container-high rounded-md",
      4: "bg-container-highest rounded",
    },
    border: {
      none: "border-none",
      ghost: "border border-outline-variant/15",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    }
  },
  defaultVariants: {
    level: 2,
    border: "none",
    padding: "md",
  }
});

export type CardVariants = VariantProps<typeof card>;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, CardVariants {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, level, border, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={card({ level, border, padding, className })}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col gap-1.5 pb-4 ${className ?? ""}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`font-display text-lg font-semibold text-on-surface tracking-tight ${className ?? ""}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex-1 ${className ?? ""}`} {...props} />
));
CardContent.displayName = "CardContent";
