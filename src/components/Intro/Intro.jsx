import { motion } from "motion/react"
import styles from "@/components/Intro/Intro.module.css";


export function Intro() {

  const title = "Welcome to my portfolio!";

  return (
    <div className={styles.introContainer}>
      {/* タイトル */}
      <h1 className={styles.introTitle}>
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.05,
              type: "spring",
              stiffness: 300
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      {/* 顔 */}
      <div className={styles.faceWrapper}>
        <motion.img
          src="/images/face.png"
          alt="face"
          className={styles.face}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: title.length * 0.05 + 0.3,
            duration: 1
          }}
        />
        {/* 手 */}
        <motion.img
          src="/images/hand.png"
          alt="hand"
          className={styles.hand}
          style={{ originX: 0.5, originY: 0.5 }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: 1,
            rotate: [0, -8, 5, -8, 0]
          }}
          transition={{
            opacity: {
              delay: title.length * 0.05 + 0.3,
              duration: 1
            }, // 顔と同時にフェードイン
            rotate: {
              delay: title.length * 0.05 + 1.3,
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
        />
      </div>
    </div>
  );
};
