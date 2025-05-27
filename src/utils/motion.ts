// lib/motion.ts
export const fadeIn = (direction: "up" | "down" | "left" | "right", delay = 0) => {
  const variant = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
  return {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true },
    variants: variant,
  };
};
