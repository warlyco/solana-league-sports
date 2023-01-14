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
    <div className="flex justify-center items-end bg-stone-900 min-h-screen relative overflow-hidden">
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
      <div className="absolute bottom-0 w-full text-center border border-blue-400">
        <div className="flex items-center justify-center text-4xl font-bold uppercase opacity-85 tracking-widest leading-8 py-1 text-slate-300">
          <div className="mr-2">i am at the center bottom</div>
        </div>
      </div>

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
