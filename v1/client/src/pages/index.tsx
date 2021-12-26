import { ConnectButton } from "components/elements/Button/ConnectButton";
import { Header } from "components/elements/Header/Header";
import { useWallet } from "hooks/useWallet";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  const wallet = useWallet();

  useEffect(() => {
    wallet.init();
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...wallet} />

      <main>Main</main>
    </div>
  );
};

export default Home;
