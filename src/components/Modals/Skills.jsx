import styles from "@/components/Modals/Modals.module.css";

export default function SkillsModal({ isVisible }) {
  return (
    <section
      id="skills"
      className={`${styles.modal_section} ${!isVisible ? styles.hidden : ""}`}
    >
      <h2>Skills</h2>
      <div className={styles.skills_grid}>
        <div className={styles.skills_item}>
          <p>HTML</p>
        </div>
        <div className={styles.skills_item}>
          <p>CSS</p>
        </div>
        <div className={styles.skills_item}>
          <p>JavaScript</p>
        </div>
        <div className={styles.skills_item}>
          <p>React</p>
        </div>
      </div>
      <button className={styles.close_btn}>閉じる</button>
    </section>
  );
}
