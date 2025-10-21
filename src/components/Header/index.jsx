import styles from "@/components/Header/Header.module.css";


export function Header({ openModal }) {
  return (
    <header>
      <button
        className={styles.hamburger}
        id="hamburger"
        aria-label="メニュー"
        aria-controls="nav-menu"
        aria-expanded="false"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <nav id="nav-menu" className={styles.nav} aria-hidden="true">
        <ul className={styles.nav_list}>
          <li><button onClick={() => openModal("home")}>Home</button></li>
          <li><button onClick={() => openModal("about")}>About</button></li>
          <li><button onClick={() => openModal("works")}>Works</button></li>
          <li><button onClick={() => openModal("skills")}>Skills</button></li>
          <li><button onClick={() => openModal("contact")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}
