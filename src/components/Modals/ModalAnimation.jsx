import { AnimatePresence, motion } from "motion/react";
import styles from "@/components/Modals/Modals.module.css";
import { IoIosClose } from "react-icons/io";

export function ModalAnimation({ isVisible, onClose, children }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className={styles.modalContainer}>
          {/* 背景のオーバーレイ */}
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose} // 背景クリックで閉じる
          />
          {/* モーダル本体 */}
          <motion.section
            className={styles.modalSection}
            initial={{ opacity: 0, scale: 0.1, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.1, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <button className={styles.modalCloseBtn} onClick={onClose}>
              <IoIosClose size={24}/>
            </button>
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  );
}
