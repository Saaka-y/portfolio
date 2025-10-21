import styles from "@/components/Modals/Modals.module.css";


export function WorksModal({ isVisible, onClose }) {
  return (
        <section 
        id="works" 
        className={`${styles.modal_section} ${!isVisible ? styles.hidden : ""}`}>
          <h2>Works</h2>
          <div className={styles.work_grid}>
            <div className={styles.work_card}>Project 1</div>
            <div className={styles.work_card}>Project 2</div>
            <div className={styles.work_card}>Project 3</div>
          </div>
          <button className={styles.close_btn} onClick={onClose}>閉じる</button>
        </section>
  );
}
