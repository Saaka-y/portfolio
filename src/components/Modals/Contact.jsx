import styles from "@/components/Modals/Modals.module.css";

export function ContactModal({ isVisible, onClose }) {
  return (
    <section
      id="contact"
      className={`${styles.modal_section} ${!isVisible ? styles.hidden : ""}`}
    >
      <h2>Contact</h2>
      <p>メール: your@email.com</p>
      <p>X (旧Twitter): @yourhandle</p>
      <button className={styles.close_btn} onClick={onClose}>閉じる</button>
    </section>
  );
}
