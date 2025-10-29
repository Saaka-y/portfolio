import styles from "@/components/Header/Header.module.css";
import { motion } from "motion/react"

// index.jsxとintro.jsxでアニメーションタイミングを制御（onComplete）

export function Header({ openModal }) {
  return (
    <motion.div
    className={styles.headerContainer}
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0, duration: 1, ease: "easeOut" }}
    >
      <header className={styles.headerBtns}>
        <button onClick={() => openModal("about")}>About</button>
        <button onClick={() => openModal("works")}>Works</button>
        <button onClick={() => openModal("skills")}>Skills</button>
        <button onClick={() => openModal("contact")}>Contact</button>
      </header>
    </motion.div>
  );
}


