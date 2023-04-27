import {
  fetchMovies,
  createEntries,
  fetchEntries,
  updateEntries,
  deleteEntries,
  login,
  signup,
  tokenIsValid,
  getUser,
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

        case "login":
          result = login(params);
          resolve(result);
          break;

        case "signup":
          result = signup(params);
          resolve(result);
          break;

        case "tokenIsValid":
          result = tokenIsValid(params);
          resolve(result);
          break;

        case "getUser":
          result = getUser(params);
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
