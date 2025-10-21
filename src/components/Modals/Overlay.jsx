import styles from "@/components/Modals/Modals.module.css";

export function Overlay({ isVisible }) {
  return (
    <div
      id="modal-overlay"
      className={`${styles.modal_overlay} ${!isVisible ? styles.hidden : ""}`}
      ></div>
  );
}
