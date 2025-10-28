import styles from "@/components/Modals/Modals.module.css";


export function WorksModal({ isVisible, onClose }) {
  return (
    <section
      className={`${styles.modalSection} ${!isVisible ? styles.modalHidden: ""}`}>
          <h2 className={styles.modalTitle}>Works</h2>
          <div className={styles.modalWorksGrid}>
            <div className={styles.modalWorksCard}>Project 1</div>
            <div className={styles.modalWorksCard}>Project 2</div>
            <div className={styles.modalWorksCard}>Project 3</div>
          </div>
          <button className={styles.modalCloseBtn} onClick={onClose}>閉じる</button>
        </section>
  );
}
