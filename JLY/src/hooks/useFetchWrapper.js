import { useCallback, useContext, useState } from "react";
import { AppContext } from "../utils/context";

export function useFetchWrapper() {
  const [loading, setLoading] = useState(false);
  const { setError } = useContext(AppContext);

  const wrappedRequest = useCallback(
    async (promise) => {
      try {
        setLoading(true);
        console.log(loading, "as");
        await promise();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [setError]
  );

  return { loading, wrappedRequest };
}
