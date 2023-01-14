import Navbar from "features/navbar/navbar";
import Overlay from "features/UI/overlay";
import { useIsLoading } from "hooks/is-loading";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

type Props = {
  children: any;
};

export default function MainLayout({ children }: Props) {
  const { isLoading } = useIsLoading();

  const { route } = useRouter();
  return (
    <div className="relative bg-stone-900">
      {route === "/" ? <></> : <Navbar />}
      <Toaster />
      <div className="mx-auto bg-stone-900">{children}</div>
      <Overlay isVisible={isLoading} />
    </div>
  );
}
