"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "./motion-variants";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  enableHover?: boolean;
  onClick?: () => void;
}

export function AnimatedCard({
  children,
  delay = 0,
  className = "",
  enableHover = true,
  onClick,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      whileHover={
        enableHover
          ? {
              scale: 1.03,
              y: -8,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }
          : undefined
      }
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
