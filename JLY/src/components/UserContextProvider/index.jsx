import { useCallback, useContext, useRef, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { AppContext, UserContext } from "../../utils/context";
import { useEffect } from "react";
import axios from "axios";

export const UserContextProvider = ({ children }) => {
  const [error, setError] = useState("");
  const { ...userUtil } = useUsers();
  const [user, setUser] = useState({ token: null, user: null });
  // const userInfo = useRef(new Map());

  const fetchUsers = useCallback(async (token) => {
    await userUtil.getUser(token);
  }, []);
  useEffect(() => {
    // console.log(user);
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        console.log("token invalid");
        localStorage.setItem("auth-token", "");
        token = "";
      }
      // if (user === null) {
      //   await fetchUsers(token);
      //   setUser({
      //     token: token,
      //     user: userUtil.data,
      //   });
      // }

      const tokenResponse = await axios.post(
        "http://localhost:3001/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );

      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5173/", {
          headers: { "x-auth-token": token },
        });

        setUser({ token: token, user: userRes });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ setError, user, setUser }}>
      {error ? <div>You did something wrong???...</div> : children}
    </UserContext.Provider>
  );
};

//AppContextProvider Acts as overhead component to store context
