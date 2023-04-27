import { useCallback, useState, useContext } from "react";
import { UserContext } from "../utils/context";
import { useFetch } from "./useFetch";
import { useFetchWrapper } from "./useFetchWrapper";

export function useUsers() {
  const { modifiedFetch, clearCache } = useFetch();
  const { loading, wrappedRequest } = useFetchWrapper();
  const [user, setUser] = useState(null);
  // const { setUser } = useContext(UserContext);

  const login = useCallback(
    (params) => {
      wrappedRequest(async () => {
        const userReq = await modifiedFetch("login", params).then((data) => {
          // console.log(data);
          const { token } = data;

          localStorage.setItem("auth-token", token);
          // clearCache();
          // setUser(data);
          // userInfo?.current.set(data);
        });
        return userReq;
      });
    },
    [modifiedFetch, wrappedRequest]
  );

  const signup = useCallback(
    //Sign Up then login
    (params) => {
      wrappedRequest(async () => {
        await modifiedFetch("signup", params).then((data) => {
          console.log(data);
          // localStorage.setItem("auth-token", )
          setUser(data);
          return data;
        });
      });
    },
    [modifiedFetch, wrappedRequest]
  );

  const tokenIsValid = useCallback(
    //Sign Up then login
    (params) => {
      wrappedRequest(async () => {
        await modifiedFetch("tokenIsValid", params).then((data) => {
          // console.log(userData);
          return data;
        });
      });
    },
    [modifiedFetch, wrappedRequest]
  );

  const getUser = useCallback(
    (params) => {
      wrappedRequest(async () => {
        return await modifiedFetch("getUser", params).then((reUser) => {
          console.log(reUser, "spds");

          setUser(reUser);
          // return reUser;
        });
      });
    },
    [modifiedFetch, wrappedRequest]
  );

  const invalidateData = useCallback(() => {
    setEntries(null);
  }, []);

  return {
    data: user,
    loading,
    login,
    signup,
    getUser,
    tokenIsValid,
    invalidateData,
  };
}
