import { motion } from "motion/react";
import styles from "@/components/Intro/Intro.module.css";

// ①タイトル表示 → ②face&hand 表示 → ③hand 振る → ④全てフェードアウト
// 同じ要素に段階的にアニメーションをつける場合、delayで調整する
// 今後 useAnimate( ) も検討する

export function Intro({ onComplete }) {
  const title = "Welcome to my portfolio!";

  return (
    <motion.div // ④全てフェードアウト
      className={styles.introContainer}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5, duration: 1 }}
      onAnimationComplete={onComplete} // フェードアウト完了で Header 表示
    >
      <h1 className={styles.introTitle}> 
        {title.split("").map((char, index) => (
          <motion.span // ①タイトル表示
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

      <div className={styles.faceWrapper}>
        <motion.img // ②face&hand 表示
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
        <motion.img
          src="/images/hand.png"
          alt="hand"
          className={styles.hand}
          style={{ originX: 1, originY: 0.5 }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: [0, -12, 12, -12, 0] }}
          transition={{
            opacity: { delay: title.length * 0.05 + 0.3, duration: 1 },
            rotate: { delay: title.length * 0.05 + 1.3, repeat: Infinity, duration: 2, ease: "easeInOut" } // ③hand 振る
          }}
        />
      </div>
    </motion.div>
  );
}
