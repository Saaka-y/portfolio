import styles from "@/components/Modals/Modals.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiResponsive } from "react-icons/si";
import { ModalAnimation } from "@/components/Modals/ModalAnimation";

export function SkillsModal({ isVisible, onClose }) {
  return (
    <ModalAnimation isVisible={isVisible} onClose={onClose}>
      <h2 className={styles.modalTitle}>Skills</h2>
      <div className={styles.modalSkillsGrid}>
        <div className={styles.modalSkillsItem}>
          <FaHtml5 size={24} />
          <p>HTML</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <FaCss3Alt size={24} />
          <p>CSS</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <FaJsSquare size={24} />
          <p>JavaScript</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <FaReact size={24} />
          <p>React</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <SiNextdotjs size={24} />
          <p>Next.js</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <SiTailwindcss size={24} />
          <p>TailwindCSS</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <FaGit size={24} />
          <p>Git</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <FaGithub size={24} />
          <p>GitHub</p>
        </div>
        <div className={styles.modalSkillsItem}>
          <FaNodeJs size={24} />
          <p>Node.js</p>
        </div>
      </div>
    </ModalAnimation>
  );
}
