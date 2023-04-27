import { useCallback, useContext } from "react";
import { AppContext } from "../utils/context";
import { _fetch } from "../utils/fetch";

export function useFetch() {
  const { cache } = useContext(AppContext);

  const modifiedFetch = useCallback(
    async (endpoint, params) => {
      const cacheKey = JSON.stringify({ endpoint, params });
      const cacheResponse = cache?.current.get(cacheKey);

      if (cacheResponse) {
        console.log("Cache Found");
        const data = JSON.parse(cacheResponse);
        return data;
      }
      console.log("No Cache found");
      const result = await _fetch(endpoint, params);
      cache?.current.set(cacheKey, JSON.stringify(result));
      return result;
    },
    [cache]
  );

  const clearCache = useCallback(() => {
    if (cache?.current) {
      cache.current = new Map();
    }
  }, [cache]);

  return { modifiedFetch, clearCache };
}
