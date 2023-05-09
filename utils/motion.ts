import { Variants } from "framer-motion";

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
  distance: number
) => ({
  hidden: {
    x: direction === "left" ? -distance : direction === "right" ? distance : 0, // Używamy wartości odległości zamiast procentów
    y: direction === "up" ? distance : direction === "down" ? distance : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
const staggerAnimation = (staggerChildren: any, delayChildren: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const variants: Variants = staggerAnimation(0.1, 0.2);

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});
