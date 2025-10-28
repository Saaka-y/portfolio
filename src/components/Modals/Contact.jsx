import styles from "@/components/Modals/Modals.module.css";

export function ContactModal({ isVisible, onClose }) {
  return (
<section
      className={`${styles.modalSection} ${!isVisible ? styles.modalHidden: ""}`}>
      <h2 className={styles.modalTitle}>Contact</h2>
      <p>メール: your@email.com</p>
      <p>X (旧Twitter): @yourhandle</p>
      <button className={styles.modalCloseBtn} onClick={onClose}>閉じる</button>
    </section>
  );
}
