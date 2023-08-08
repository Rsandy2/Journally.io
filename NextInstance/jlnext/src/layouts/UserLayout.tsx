import { UserContext } from "@/libs/context";
import { auth } from "@/libs/firebase";
import axios from "axios";
// import { prisma } from "@/libs/prisma";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function UserLayout({ children }: any) {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe;
    if (user) {
      const uid = user?.uid;
      axios
        .post("/api/checkUser", { uid: uid })
        .then((res) => {
          console.log(res.data);
          if (res.data?.username) {
            setUsername(res.data.username);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(user);
      //   setUsername("dkk");
    }
  }, [user]);
  return (
    <>
      {!user && (
        <>
          <div className="">{children}</div>
        </>
      )}
      {!username && (
        <UserContext.Provider value={{ user: user, username: username }}>
          <UsernameForm />
        </UserContext.Provider>
      )}
      {user && username && <PageExample children={children}/>}
    </>
  );
}

const UsernameForm = () => {
  return (
    <>
      <main className="">Create a username</main>
      <input type="text" />
    </>
  );
};

const PageExample = ({children}:any) => {
  return (
    <>
      <main className="">Welcome</main>
      {children}
    </>
  );
};
