import {
  GoogleAuthProvider,
  linkWithRedirect,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Image from "next/image";
import { auth } from "../libs/firebase";
import SignInButton from "../components/ui/SignInButton";
import { UserContext } from "@/libs/context";
import { useContext } from "react";

export default function Home() {
  const { user, username } = useContext(UserContext);
  const dog = process.env.NEXT_PUBLIC_DEV_PORT
  return (
    <main className="flex min-h-screen flex-col gap-4 p-24">
      {/* <div className="">{username}</div>
      <div className="">{dog}</div>
      <SignInButton provider={"Google"} />
      <button onClick={() => signOut(auth)} className="w-16 bg-red-600 h-16">
        Sign Out
      </button> */} 
    </main>
  );
}
