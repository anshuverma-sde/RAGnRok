"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const badge = tv({
  base: "inline-flex items-center gap-1.5 font-medium tracking-wide",
  variants: {
    intent: {
      default: "bg-[#20201F] text-[#C7C4D7]",
      primary: "bg-[#1C1B4E] text-[#C0C1FF]",
      success: "bg-[#0B3324] text-[#4ADE80]",
      warning: "bg-[#3B2000] text-[#FCD34D]",
      error: "bg-[#93000A] text-[#FFB4AB]",
      ai: "bg-[#003543] text-[#4CD6FF]",
      secondary: "bg-[#3B0900] text-[#FFB5A1]",
    },
    size: {
      sm: "h-5 px-2 text-[10px] rounded-md",
      md: "h-6 px-2.5 text-xs rounded-lg",
      lg: "h-7 px-3 text-sm rounded-xl",
    },
    dot: {
      true: "",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "md",
    dot: false,
  },
});

export type BadgeVariants = VariantProps<typeof badge>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BadgeVariants {
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, intent, size, dot, children, ...props }, ref) => {
    return (
      <span ref={ref} className={badge({ intent, size, dot, className })} {...props}>
        {dot && (
          <span
            className="h-1.5 w-1.5 rounded-full bg-current opacity-80"
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";

export { badge };
