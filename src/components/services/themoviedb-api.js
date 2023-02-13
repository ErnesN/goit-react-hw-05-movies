import axios from 'axios';

const API_KEY = 'f051455512c484509b6d393ae9816298';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;

export const fetchTrendingFilms = async (page = 1) => {
  return await axios.get(
    `${TREND_URL}?api_key=${API_KEY}&page=${page}&language=uk-UA`
  );
};

export const fetchFilmToId = async id => {
  return await axios.get(`${ID_URL}${id}?api_key=${API_KEY}&language=uk-UA`);
};

export const fetchSearchFilms = async (searchQuery, page = 1) => {
  return await axios.get(
    `${SEARCH_URL}?api_key=${API_KEY}&query=${searchQuery}&page=${page}&language=uk-UA`
  );
};

export const fetchCastFilmToId = async id => {
  return await axios.get(
    `${ID_URL}${id}/credits?api_key=${API_KEY}&language=uk-UA`
  );
};

export const fetchReviewsFilmToId = async id => {
  return await axios.get(`${ID_URL}${id}/reviews?api_key=${API_KEY}`);
};
