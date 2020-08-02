/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (requestServer) => {
    if (requestServer.ok) {
      const response = await requestServer.json();
      return response;
    }
    throw new Error('Não foi possível pegar os dados:');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (requestServer) => {
    if (requestServer.ok) {
      const response = await requestServer.json();
      return response;
    }
    throw new Error('Não foi possível pegar os dados:');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
