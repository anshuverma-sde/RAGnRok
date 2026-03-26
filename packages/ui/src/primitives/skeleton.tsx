"use client";

import * as React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-busy="true"
        aria-live="polite"
        className={[
          "rounded-lg",
          "bg-gradient-to-r from-[#20201F] via-[#2A2A2A] to-[#20201F]",
          "bg-[length:1000px_100%]",
          "animate-shimmer",
          className ?? "",
        ].join(" ")}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

/** Pre-composed skeleton for a typical text block */
export const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="flex flex-col gap-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        className="h-4"
        style={{ width: i === lines - 1 ? "60%" : "100%" }}
      />
    ))}
  </div>
);
