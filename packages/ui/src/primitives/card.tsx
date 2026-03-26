"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const card = tv({
  base: "relative flex flex-col text-on-surface transition-colors duration-200 overflow-hidden",
  variants: {
    level: {
      0: "bg-surface",
      1: "bg-surface-container-lowest rounded-sm shadow-sm",
      2: "bg-surface-container rounded-sm shadow-sm",
      3: "bg-surface-container-high rounded-sm shadow-sm",
      4: "bg-surface-container-highest rounded-sm shadow-inner border border-outline-variant/10",
    },
    border: {
      none: "border-none",
      ghost: "border border-outline-variant/20",
      primary: "border-l-4 border-l-primary",
      tertiary: "border-l-4 border-l-tertiary",
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
    border: "ghost",
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
    className={`font-headline text-2xl font-bold tracking-tight text-on-surface ${className ?? ""}`}
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
