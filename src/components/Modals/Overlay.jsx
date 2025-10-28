import styles from "@/components/Modals/Modals.module.css";

export function Overlay({ isVisible }) {
  return (
    <div
      className={`${styles.modalOverlay} ${!isVisible ? styles.modalHidden : ""}`}
    ></div>
  );
}
