import styles from "@/components/Modals/Modals.module.css";
import { ModalAnimation } from "@/components/Modals/ModalAnimation";


export function ContactModal({ isVisible, onClose }) {
  return (
    <ModalAnimation isVisible={isVisible} onClose={onClose}>
      <h2 className={styles.modalTitle}>Contact</h2>
      <p>メール: your@email.com</p>
      <p>X (旧Twitter): @yourhandle</p>
    </ModalAnimation>
  );
}
