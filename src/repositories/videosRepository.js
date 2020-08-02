/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (requestServer) => {
      if (requestServer.ok) {
        const response = await requestServer.json();
        return response;
      }
      throw new Error('Não foi possível pegar os dados:');
    });
}

export default {
  create,
};
