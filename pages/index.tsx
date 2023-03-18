import { Header } from "@/components/molecules";
import { GamesPromotions } from "@/components/molecules/gamespromoton";
import { Hero } from "@/components/molecules/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GAME LORD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="pt-12 bg-[rgb(240,240,240)] relative">
        <div className="relative flex flex-col">
          <Hero />
          <GamesPromotions />
        </div>
        <div className="bg-white h-80"></div>
      </div>
    </>
  );
}
