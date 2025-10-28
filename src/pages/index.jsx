import { useState } from "react";
import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Modals } from "@/components/Modals/Modals";
import { Intro } from "@/components/Intro/Intro";


export default function Home() {

  const [modalVisible, setModalVisible] = useState({
    about: false,
    works: false,
    skills: false,
    contact: false,
  });

  // 例: モーダル閉じるときのハンドラー
  const closeAllModals = () => {
    setModalVisible({
      about: false,
      works: false,
      skills: false,
      contact: false,
    });
  };

  const openModal = (name) => {
    setModalVisible((prev) => ({
      ...prev, // keep previous states
      [name]: true, // change only the state of the specified modal to true
    }));
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Saaka's portfolio</title>
      </Head>
      <Intro />
      <Header openModal={openModal} />
      <Modals modalVisible={modalVisible} onClose={closeAllModals} />
    </>
  );
}
