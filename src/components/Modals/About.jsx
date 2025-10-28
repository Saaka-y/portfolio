import styles from "@/components/Modals/Modals.module.css";

export function AboutModal({ isVisible, onClose }) {
  return (
    <section
      className={`${styles.modalSection} ${!isVisible ? styles.modalHidden : ""}`}>
      <h2 className={styles.modalTitle}>Hello, I'm Saaka!</h2>
      <p>I'm a self-taught front-end developer who has been learning and building web projects for the past year.
        I specialize in HTML, CSS, JavaScript, React, Next.js, and TailwindCSS, and I’ve gained practical experience by creating my own responsive and interactive web applications.<br />
        <br />
        I’m also familiar with Git/GitHub, Node.js, npm, and responsive design principles.
        Currently, I’m learning TypeScript and API integration to build more dynamic and scalable projects.<br />
        <br />
        Even though I’m new to client work, I’m confident in my ability to learn quickly, write clean code, and deliver results on time.<br />
        <br />
        I’m passionate about improving my skills and collaborating on real-world projects that make a difference.</p>
      <button className={styles.modalCloseBtn} onClick={onClose}>閉じる</button>
    </section>
  );
}
