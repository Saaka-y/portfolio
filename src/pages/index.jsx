import { useState } from "react";
import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Modals } from "@/components/Modals/Modals";
import { Intro } from "@/components/Intro/Intro";



// IntroとHeaderのアニメーションをここでstate管理することに

export default function Home() {

  const [modalVisible, setModalVisible] = useState({
    about: false,
    works: false,
    skills: false,
    contact: false,
  });

    const openModal = (name) => {
    setModalVisible((prev) => ({
      ...prev, 
      [name]: true,
    }));
  }

  const closeAllModals = () => {
    setModalVisible({
      about: false,
      works: false,
      skills: false,
      contact: false,
    });
  };

  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Saaka's portfolio</title>
      </Head>
      {!showHeader && <Intro onComplete={() => setShowHeader(true)} />}
      {showHeader && <Header openModal={openModal} />}
      <Modals modalVisible={modalVisible} onClose={closeAllModals} />
    </>
  );
}
