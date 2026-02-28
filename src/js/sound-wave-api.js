import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';
const ARTISTS_END_POINT = `/artists/`;
const ARTIST_ALBUMS_ENDPOINT = '/albums/';
const FEEDBACKS_ENDPOINT = `/feedbacks/`;
const GENRE_END_POINT = `/genres/`;
const API_KEY = '';

export async function getArtists(perPage, page, name, sortName, genre) {
  const url = BASE_URL + ARTISTS_END_POINT;

  const params = {
    limit: perPage,
    page,
    name,
    sortName,
    genre,
  };

  const headers = {};

  const response = await axios.get(url, { params });
  return response.data;
}

export async function getFeedbacks() {
  const url = BASE_URL + FEEDBACKS_ENDPOINT;

  const params = {
    limit: 10,
  };

  const headers = {};

  const response = await axios.get(url, { params });
  return response.data;
}

export async function getArtistInfoById(id) {
  const url = BASE_URL + ARTISTS_END_POINT + id + ARTIST_ALBUMS_ENDPOINT;
  const params = {};

  const headers = {};

  const response = await axios.get(url, { params });
  return response.data;
}

export async function getGenres() {
  const url = BASE_URL + GENRE_END_POINT;

  const response = await axios.get(url);
  return response.data;
}
