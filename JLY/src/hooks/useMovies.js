import { useCallback, useState } from "react";
import { useFetch } from "./useFetch";
import { useFetchWrapper } from "./useFetchWrapper";

export function useMovies() {
  const { modifiedFetch } = useFetch();
  const { loading, wrappedRequest } = useFetchWrapper();
  const [movies, setMovies] = useState(null);

  const fetchData = useCallback(
    () =>
      wrappedRequest(async () => {
        const moviesData = await modifiedFetch("fetch-movies");
        setMovies(moviesData);
      }),
    [modifiedFetch, wrappedRequest]
  );

  const invalidateData = useCallback(() => {
    setMovies(null);
  }, []);

  return { data: movies, loading, fetchData, invalidateData };
}
