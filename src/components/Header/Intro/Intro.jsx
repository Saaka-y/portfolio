import { motion } from "motion/react"
import { IntroTitle } from "@/components/Header/Intro/Intro.module.css";


export function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className={IntroTitle}>Welcome to my portfolio!</h1>
    </motion.div>
  );
}