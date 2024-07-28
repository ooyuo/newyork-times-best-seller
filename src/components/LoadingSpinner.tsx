"use client";

import { motion } from "framer-motion";
import styles from "@/styles/LoadingSpinner.module.css";

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "linear",
    },
  },
};

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <motion.div
        className={styles.spinner}
        variants={spinnerVariants}
        animate="animate"
      />
    </div>
  );
};

export default LoadingSpinner;
