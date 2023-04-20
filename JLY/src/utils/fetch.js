import { getMovies } from "./request";

export function Fetch(endpoint, params) {
  return new Promise((resolve, reject) => {
    let result;

    try {
      switch (endpoint) {
        case "fetch-movies":
          result = getMovies();
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
