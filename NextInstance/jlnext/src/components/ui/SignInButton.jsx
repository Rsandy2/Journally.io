"use client";
import { linkWithPopup, signInWithPopup } from "firebase/auth";
import { googleProvider, githubProvider, auth } from "../../libs/firebase";
import axios from "axios";
import useSWR from "swr";
import { fetcher } from "@/libs/utils/fetcher";
import { useEffect, useState } from "react";
export default function SignInButton({ provider = null || "" }) {
  const Providers = {
    Google: googleProvider,
    Github: githubProvider,
  };

  // const { data, isLoading } = useSWR(["/api/checkUser", uid], ([url, uid]) =>
  //   fetchWithToken(url, uid)
  // );

  const SignInWithButton = () => {
    signInWithPopup(auth, Providers[provider]).then((result) => {
      console.log(result);

    });
  };

  useEffect(() => {}, []);

  // const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <div className="">{}</div>
      {/* {isLoading && <div className="">loading</div>} */}
      <button
        onClick={() => {
          SignInWithButton();
        }}
        className="py-2 px-3 rounded-md bg-violet-500 text-xs"
      >
        Sign In
      </button>
    </>
  );
}
