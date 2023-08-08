import type { AppProps } from "next/app";
import "../globals.css";
import { UserContext } from "@/libs/context";
import UserLayout from "@/layouts/UserLayout";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout>
    </>
  );
}
