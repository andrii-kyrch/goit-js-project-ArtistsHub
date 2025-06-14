import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';
const END_POINT = `/artists/`;
const API_KEY = '';

export default async function getArtists(perPage, page) {
  const url = BASE_URL + END_POINT;

  const params = {
    limit: perPage,
    page,
  };

  const headers = {};

  const response = await axios.get(url, { params });
  return response.data;
}
