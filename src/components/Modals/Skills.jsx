import styles from "@/components/Modals/Modals.module.css";

export function SkillsModal({ isVisible, onClose }) {
  return (
    <section
      className={`${styles.modalSection} ${!isVisible ? styles.modalHidden: ""}`}>
      <h2 className={styles.modalTitle}>Skills</h2>
      <div className={styles.modalSkillsGrid}>
        <div className={styles.modalSkillsItem}>
          <p>HTML</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <p>CSS</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <p>JavaScript</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <p>React</p>
        </div>
      </div>
      <button className={styles.modalCloseBtn} onClick={onClose}>閉じる</button>
    </section>
  );
}
