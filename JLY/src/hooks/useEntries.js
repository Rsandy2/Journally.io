import { useCallback, useState } from "react";
import { useFetch } from "./useFetch";
import { useFetchWrapper } from "./useFetchWrapper";

export function useEntries() {
  const { modifiedFetch } = useFetch();
  const { loading, wrappedRequest } = useFetchWrapper();
  const [entry, setEntries] = useState(null);
  const [loadedEntries, setLoadedEntries] = useState(null);

  const fetchData = useCallback(
    (params, fetchAllData = false) => {
      console.log(params, fetchAllData);

      wrappedRequest(async () => {
        if (fetchAllData) {
          //Flag On Load Data
          const loadEntriesData = await modifiedFetch("fetch-entries");
          setLoadedEntries(loadEntriesData);
          console.log(typeof loadEntriesData);
          return loadEntriesData;
        } else {
          console.log("CRE");
          const entriesData = await modifiedFetch(
            "create-entries",
            params
          ).then(async () => {
            const loadEntriesData = await modifiedFetch("fetch-entries");
            setLoadedEntries(loadEntriesData);
          });
          setEntries(entriesData);
          console.log(entriesData);
        }
      });
    },
    [modifiedFetch, wrappedRequest]
  );

  const updateData = useCallback(
    (params) => {
      console.log(params);

      wrappedRequest(async () => {
        await modifiedFetch("update-entries", params).then(async (a) => {
          console.log(a);
          const loadEntriesData = await modifiedFetch("fetch-entries");
          setLoadedEntries(loadEntriesData);
        });
        // setEntries(entriesData);
      });
    },
    [modifiedFetch, wrappedRequest]
  );

  const deleteData = useCallback(
    (params) => {
      console.log(params);
      wrappedRequest(async () => {
        await modifiedFetch("delete-entries", params).then(async () => {
          const loadEntriesData = await modifiedFetch("fetch-entries");
          setLoadedEntries(loadEntriesData);
        });
        // setEntries(entriesData);
      });
    },
    [modifiedFetch, wrappedRequest]
  );

  const invalidateData = useCallback(() => {
    setEntries(null);
  }, []);

  return {
    data: loadedEntries,
    loading,
    fetchData,
    updateData,
    deleteData,
    invalidateData,
  };
}
