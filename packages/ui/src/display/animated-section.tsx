"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) =>
    ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay,
      },
    }) as const,
};

/**
 * Viewport-triggered fade+slide-up wrapper. Use for any content block
 * that should animate in when it enters the viewport.
 */
export const AnimatedSection = ({
  delay = 0,
  children,
  className,
  ...props
}: AnimatedSectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    custom={delay}
    variants={fadeUp}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/** Stagger container — wraps children that each have stagger-child variants */
export const StaggerContainer = ({
  children,
  delay = 0,
  stagger = 0.12,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Child item for use inside StaggerContainer */
export const StaggerItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
