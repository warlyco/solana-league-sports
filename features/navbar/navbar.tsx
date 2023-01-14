import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import socialNavigationItems from "features/footer/social-navigation-items";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-10 border-b border-b-stone-900">
      <header className="mx-auto max-w-6xl py-4">
        <nav className="w-full flex items-center justify-between text-gray-300 text-2xl uppercase">
          <Link href="/">Solana League Sports</Link>
          <WalletMultiButton />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
