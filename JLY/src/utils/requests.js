export const getMovies = async (params) => {
  return await fetchMovies(params);
};

const fetchMovies = async (params) => {
  console.log("Fetched Movie from file: request.js");
  const response = await fetch("http://localhost:5173/fetch-movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  return response.json();
};
