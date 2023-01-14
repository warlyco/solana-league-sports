import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import socialNavigationItems from "features/footer/social-navigation-items";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-10 border-b border-b-stone-900">
      <header className="bg-stone-800">
        <nav className="mx-auto max-w-7xl px-6" aria-label="Top">
          <div className="flex w-full items-center justify-between py-3 lg:border-none px-4 md:px-0">
            <Link href="/">Solana League Sports</Link>
            <div className="ml-10 space-x-4 flex items-center">
              {/* <div className="flex justify-center space-x-6 mr-4">
                {socialNavigationItems.map((item) => (
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
              </div> */}
              <WalletMultiButton />
            </div>
          </div>
          {/* <div className="flex flex-wrap justify-center space-x-6 py-2 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-300 hover:text-gray-50"
              >
                {link.name}
              </a>
            ))}
          </div> */}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
