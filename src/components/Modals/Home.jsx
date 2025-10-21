import styles from "@/components/Modals/Modals.module.css";

export function HomeModal({ isVisible, onClose }) {
  return (
    <section
      id="home"
      className={`${styles.modal_section} ${!isVisible ? styles.hidden : ""}`}>
      <h1>こんにちは、私は〇〇です。</h1>
      <p>フロントエンドエンジニア / Webデザイナー</p>
      <button className={styles.close_btn} onClick={onClose}>閉じる</button>
    </section>
  );
}
