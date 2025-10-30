import styles from "@/components/Modals/Modals.module.css";
import { ModalAnimation } from "@/components/Modals/ModalAnimation";


export function AboutModal({ isVisible, onClose }) {
  return (
    <ModalAnimation isVisible={isVisible} onClose={onClose}>
      <h2 className={styles.modalTitle}>About</h2>
      <p>I’m passionate about improving my skills and collaborating on real-world projects that make a difference.</p>
    </ModalAnimation>
  )
}
