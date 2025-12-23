import axios from "axios";

const API_KEY = "mfeQYW80utJgxWVSaSzikUu3Rhx20HeQJ2lDRYUhNx8";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
  params: {
    per_page: 20,
    orientation: "landscape",
  },
});

export const getPhotos = async (query, page = 1) => {
  const response = await api.get("/search/photos", {
    params: {
      query,
      page,
    },
  });

  return response.data.results;
};
