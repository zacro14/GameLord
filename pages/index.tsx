import { GamesPromotions, Header, Hero } from "@/components/molecules";
import { AllGames } from "@/components/molecules/games";
import { Benefits } from "@/components/organism/benefits";
import { CrossPlatformSection } from "@/components/organism/crossplatform";
import { Promotion } from "@/data";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GAME LORD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="pt-[55px]  relative flex flex-col min-h-screen h-auto">
        <Header />
        <div className="flex flex-col bg-[rgb(240,240,240)] flex-grow-[1] flex-shrink-0">
          <div className="relative">
            <Hero />
            {Promotion.map((data, i) => {
              if (i === 1)
                return (
                  <GamesPromotions
                    key={data.name}
                    className="flex-row-reverse "
                    {...data}
                  />
                );

              return <GamesPromotions key={data.name} {...data} />;
            })}
            <AllGames />
            <Benefits />
            <CrossPlatformSection />
          </div>
        </div>
      </div>
    </>
  );
}
