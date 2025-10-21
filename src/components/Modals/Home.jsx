import styles from "@/components/Modals/Modals.module.css";

export function HomeModal({ isVisible }) {
  return (
    <section
      id="home"
      className={`${styles.modal_section} ${!isVisible ? styles.hidden : ""}`}>
      <h1>こんにちは、私は〇〇です。</h1>
      <p>フロントエンドエンジニア / Webデザイナー</p>
      <button className={styles.close_btn}>閉じる</button>
    </section>
  );
}
