import styles from "@/components/Header/Header.module.css";


export function Header({ openModal }) {
  return (
      <header className={styles.headerBtns}>
        <button onClick={() => openModal("about")}>About</button>
        <button onClick={() => openModal("works")}>Works</button>
        <button onClick={() => openModal("skills")}>Skills</button>
        <button onClick={() => openModal("contact")}>Contact</button>
      </header>
  );
}
