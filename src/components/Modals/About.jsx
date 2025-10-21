import styles from "@/components/Modals/Modals.module.css";

export function AboutModal({ isVisible }) {
  return (
        <section 
        id="about" 
        className={`${styles.modal_section} ${!isVisible ? styles.hidden : ""}`}>
          <h2>About</h2>
          <p>自己紹介やスキルを書きます。</p>
          <button className={styles.close_btn}>閉じる</button>
        </section>
  );
}
