const data = {
  movies: fetchMovies,
};

export const getMovies = () => {
  data.fetchMovies;
};

const fetchMovies = async () => {
  console.log("Fetched Movie from file: request.js");
  const response = await fetch("http://localhost:5173/fetch-movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
