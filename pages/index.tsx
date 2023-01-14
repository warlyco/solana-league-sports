import { PublicKey } from "@solana/web3.js";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [nftMintAddress, setNftMintAddress] = useState("");
  const router = useRouter();

  const submitNftSearch = () => {
    if (!nftMintAddress?.length) {
      return;
    }
    const isValid = !!new PublicKey(nftMintAddress);
    if (!isValid) {
      return;
    }
    router.push(`/nft/${nftMintAddress}`);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      submitNftSearch();
    }
  };

  return (
    <div className="flex justify-center items-end bg-stone-900 max-h-screen min-h-screen relative text-blue-400 overflow-hidden">
      <Head>
        <title>Solana League Sports</title>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" /> */}
      </Head>
      <div className="absolute h-screen w-screen top-0 bottom-0 right-0 left-0 overflow-hidden text-stone-900">
        <div className="absolute bottom-[15%] right-[50%] z-10 -mr-[90px] text-6xl">
          sports go sports!
          {/* <Image
            src="/images/warlyco-logo-white-on-transparent.svg"
            alt="warlyco-logo-white-on-transparent"
            width={180}
            height={180}
          /> */}
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-center border border-blue-400">
        <div className="flex items-center justify-center text-4xl font-bold uppercase opacity-85 tracking-widest leading-8 py-1 text-slate-300">
          <div className="mr-2">i am at the center bottom</div>
        </div>
      </div>
      <a
        rel="noreferrer"
        href="https://discord.gg/PH4GgHJHef"
        target="_blank"
        className="absolute top-0 w-full text-center border border-blue-400 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-pink-500 min-h-[40px]"
      >
        <div className="text-4xl font-bold uppercase opacity-85 tracking-widest leading-8 rotate-180 py-1 text-slate-300">
          discord
        </div>
      </a>
      <a
        href="//twitter.com/warlyco"
        target="_blank"
        className="absolute flex flex-col justify-center left-0 h-screen border border-blue-400 hover:bg-gradient-to-b hover:from-pink-500 hover:to-yellow-500 min-h-[40px]"
        rel="noreferrer"
      >
        <div className="w-full text-4xl font-bold uppercase opacity-85 tracking-widest left-is-bottom-text leading-8 px-1 text-slate-300">
          twitter
        </div>
      </a>
      <style jsx>{`
        html,
        body {
          max-height: 100vh;
          overflow: hidden;
        }
        #__next {
          overflow: hidden;
        }
        .left-is-bottom-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .right-is-bottom-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          translate: ;
        }
      `}</style>
    </div>
  );
}
