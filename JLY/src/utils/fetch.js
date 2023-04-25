import { getMovies } from "./requests";

export function _fetch(endpoint, params) {
  return new Promise((resolve, reject) => {
    let result;
console.log("excusse me");
    try {
      switch (endpoint) {
        case "fetch-movies":
          result = getMovies(params);
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
