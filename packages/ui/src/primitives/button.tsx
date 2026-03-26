"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";

export const button = tv({
  base: [
    "inline-flex items-center justify-center gap-2 font-label uppercase tracking-widest text-[10px] rounded-sm",
    "transition-all duration-200 ease-out border-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none whitespace-nowrap",
  ],
  variants: {
    intent: {
      primary: "bg-primary text-on-primary font-bold hover:opacity-90 shadow-sm",
      secondary: "bg-surface-container-highest text-on-surface font-bold hover:bg-surface-container shadow-sm",
      ghost: "bg-transparent text-primary font-bold hover:bg-surface-container",
      danger: "bg-error text-on-error hover:opacity-90 font-bold",
    },
    size: {
      sm: "h-8 px-3",
      md: "h-10 px-4",
      lg: "h-12 px-6",
    },
    loading: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    loading: false,
  },
});

export type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, intent, size, loading, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={button({ intent, size, loading, className })}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";
