import styles from "@/components/Modals/Modals.module.css";
import { ModalAnimation } from "@/components/Modals/ModalAnimation";

export function WorksModal({ isVisible, onClose }) {
  return (
    <ModalAnimation isVisible={isVisible} onClose={onClose}>
      <h2 className={styles.modalTitle}>Works</h2>
      <div className={styles.modalWorksList}>
        <div className={styles.modalWorksCard}>
          <p>Project 1</p>
          <p>Descirption</p>
        </div>
        <div className={styles.modalWorksCard}>
          <p>Project 2</p>
          <p>Descirption</p>
        </div>
        <div className={styles.modalWorksCard}>
          <p>Project 3</p>
          <p>Descirption</p>
        </div>
      </div>
    </ModalAnimation>
  );
}
