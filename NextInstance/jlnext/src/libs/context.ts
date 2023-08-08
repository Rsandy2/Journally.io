import { createContext } from "react";

type USERContext = {
  user: {} | null | undefined;
  username: string | null;
};
export const UserContext = createContext<USERContext>({ user: null, username: null });
