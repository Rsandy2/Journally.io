import {
  fetchMovies,
  createEntries,
  fetchEntries,
  updateEntries,
  deleteEntries,
} from "./requests";

export function _fetch(endpoint, params) {
  return new Promise((resolve, reject) => {
    let result;

    try {
      switch (endpoint) {
        case "fetch-movies":
          result = fetchMovies(params);
          resolve(result);
          break;

        case "create-entries":
          result = createEntries(params);
          resolve(result);
          break;

        case "update-entries":
          result = updateEntries(params);
          resolve(result);
          break;

        case "delete-entries":
          result = deleteEntries(params);
          resolve(result);
          break;

        case "fetch-entries":
          result = fetchEntries();
          resolve(result);
          break;

        default:
          throw new Error("Invalid Fetch Endpoint");
      }
    } catch (error) {
      if (error) {
        reject(error.message);
      }
    }
  });
}
