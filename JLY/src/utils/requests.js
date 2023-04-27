export const login = async (params) => {
  console.log("Logged in User from file: request.js");
  const response = await fetch("http://localhost:5173/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  return response.json();
};

export const signup = async (params) => {
  console.log("Signed Up User from file: request.js");
  const response = await fetch("http://localhost:5173/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  return response.json();
};

export const tokenIsValid = async (params) => {
  console.log("Token Validity from file: request.js");
  const response = await fetch("http://localhost:5173/tokenIsValid", {
    method: "POST",
    headers: {
      "x-auth-token": params,
    },
    body: null,
  });

  return response.json();
};

export const getUser = async (params) => {
  console.log("Get User / from file: request.js");
  const response = await fetch("http://localhost:5173/", {
    method: "GET",
    headers: {
      "x-auth-token": params,
    },
  });

  return response.json();
};

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
