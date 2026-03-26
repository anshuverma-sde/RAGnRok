"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const glassPanelVariants = tv({
  base: "bg-surface-variant/60 backdrop-blur-[12px] border border-outline-variant/15 transition-all duration-300",
  variants: {
    radius: {
      none: "rounded-none",
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    shadow: {
      none: "shadow-none",
      ambient: "shadow-[0_24px_48px_rgba(192,193,255,0.06)]",
    }
  },
  defaultVariants: {
    radius: "lg",
    shadow: "ambient",
  }
});

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof glassPanelVariants> {}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, radius, shadow, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={glassPanelVariants({ radius, shadow, className })}
        {...props}
      />
    );
  }
);
GlassPanel.displayName = "GlassPanel";
