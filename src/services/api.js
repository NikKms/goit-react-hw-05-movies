import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '88b8a7c5d221d3120fb29d734050dc7d';

export const getTrendFilms = async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};

export const getSearchMovie = async query => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );

  return res.data;
};

export const getMovieById = async id => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};

export const getMovieCast = async id => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};

export const getMovieReviews = async id => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};
