import React from "react";
import { AboutModal } from "@/components/Modals/About";
import { WorksModal } from "@/components/Modals/Works";
import { SkillsModal } from "@/components/Modals/Skills";
import { ContactModal } from "@/components/Modals/Contact";


export function Modals({ modalVisible, onClose }) {
  
  return (
    <div>
      <AboutModal isVisible={modalVisible.about} onClose={onClose} />
      <WorksModal isVisible={modalVisible.works} onClose={onClose} />
      <SkillsModal isVisible={modalVisible.skills} onClose={onClose} />
      <ContactModal isVisible={modalVisible.contact} onClose={onClose} />
    </div>
  );
}