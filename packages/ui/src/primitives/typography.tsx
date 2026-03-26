import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const typographyVariants = tv({
  base: "text-on-surface",
  variants: {
    variant: {
      headline: "font-headline font-bold tracking-tighter",
      body: "font-body leading-relaxed",
      label: "font-label uppercase tracking-widest font-bold",
      mono: "font-mono",
    },
    color: {
      default: "text-on-surface",
      muted: "text-on-surface-variant",
      primary: "text-primary",
      tertiary: "text-tertiary",
    },
    size: {
      xs: "text-[10px]",
      sm: "text-xs md:text-sm",
      base: "text-sm md:text-base",
      lg: "text-lg md:text-xl",
      xl: "text-xl md:text-2xl",
      "2xl": "text-2xl md:text-3xl",
      "3xl": "text-3xl md:text-4xl",
      "4xl": "text-4xl md:text-5xl",
      "5xl": "text-5xl md:text-6xl",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
    size: "base",
  },
});

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export function Typography({
  className,
  variant,
  color,
  size,
  as: Component = "p",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={typographyVariants({ variant, color, size, className })}
      {...props}
    />
  );
}
