export const createEntries = async (params) => {
  console.log("Created Entries from file: request.js");
  const response = await fetch("http://localhost:5173/create-entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  return response.json();
};

export const updateEntries = async (params) => {
  console.log("Updated Entries from file: request.js");
  const response = await fetch("http://localhost:5173/update-entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  return response.json();
};

export const deleteEntries = async (params) => {
  console.log("Deleted Entries from file: request.js");
  const response = await fetch("http://localhost:5173/delete-entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  return response.json();
};

export const fetchEntries = async () => {
  console.log("Fetched Entries from file: request.js");
  const response = await fetch("http://localhost:5173/fetch-entries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const fetchMovies = async (params) => {
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
