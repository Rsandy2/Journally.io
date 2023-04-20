import { useRef, useState } from "react";
import { AppContext } from "../../utils/context";

export const AppContextProvider = ({ children }) => {
  const cache = useRef(new Map());
  const [error, setError] = useState("");

  return (
    <AppContext.Provider value={{ setError, cache }}>
      {error ? <div>You did something wrong...</div> : children}
    </AppContext.Provider>
  );
};

//AppContextProvider Acts as overhead component to store context
