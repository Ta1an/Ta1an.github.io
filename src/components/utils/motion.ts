import { stagger } from "motion-v";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export const viewport = {
  once: true,
  amount: 0.3,
};

export const delayChildren = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.15, {
        startDelay: 0.2,
      }),
    },
  },
};
