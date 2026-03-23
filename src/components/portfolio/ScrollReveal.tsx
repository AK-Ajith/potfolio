import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  stagger?: boolean;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40, filter: "blur(2px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -40, filter: "blur(2px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 40, filter: "blur(2px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const ScrollReveal = ({ children, className, delay = 0, direction = "up", stagger = false }: Props) => {
  const motionProps = stagger 
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 },
        variants: containerVariants,
        transition: { duration: 0.7, delay },
      }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 },
        transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        variants: variants[direction],
      };

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
