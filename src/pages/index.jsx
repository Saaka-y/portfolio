import React from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modals } from "@/components/Modals/Modals";



// モーダル表示制御はここに実装してください（例: ボタンでstate切り替え）

export default function Home() {

  const [modalVisible, setModalVisible] = React.useState({
    home: false,
    about: false,
    works: false,
    skills: false,
    contact: false,
  });

  // 例: モーダル閉じるときのハンドラー
  const closeAllModals = () => {
    setModalVisible({
      home: false,
      about: false,
      works: false,
      skills: false,
      contact: false,
    });
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Saakaのポートフォリオ</title>
      </Head>

      <Header />
      <Modals modalVisible={modalVisible} onClose={closeAllModals} />
      <Footer />
    </>
  );
}
