import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { socialLinks } from "features/navbar/social-links";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-10 border-b border-b-stone-900">
      <header className="mx-auto max-w-5xl p-4">
        <nav className="w-full flex items-center justify-between text-gray-300 text-2xl uppercase">
          <Link href="/">Solana League Sports</Link>
          <div className="flex justify-center space-x-6 mr-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          {/* <WalletMultiButton /> */}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
