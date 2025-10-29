import React from "react";
import { Overlay } from "@/components/Modals/Overlay";
import { AboutModal } from "@/components/Modals/About";
import { WorksModal } from "@/components/Modals/Works";
import { SkillsModal } from "@/components/Modals/Skills";
import { ContactModal } from "@/components/Modals/Contact";
import { motion } from "motion/react"



export function Modals({ modalVisible, onClose }) {
  // どれかモーダルが開いていればオーバーレイ表示
  const isAnyModalVisible = Object.values(modalVisible).some(Boolean);

  return (
    <div>
      <Overlay isVisible={isAnyModalVisible} onClick={onClose} />

      <AboutModal isVisible={modalVisible.about} onClose={onClose} />
      <WorksModal isVisible={modalVisible.works} onClose={onClose} />
      <SkillsModal isVisible={modalVisible.skills} onClose={onClose} />
      <ContactModal isVisible={modalVisible.contact} onClose={onClose} />
    </div>
  );
}