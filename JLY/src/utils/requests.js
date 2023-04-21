export const getMovies = async () => {
  return await fetchMovies();
};

const fetchMovies = async () => {
  console.log("Fetched Movie from file: request.js");
  const response = await fetch("http://localhost:5173/fetch-movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
