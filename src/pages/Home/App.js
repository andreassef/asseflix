/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
//import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
//import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
// import dadosIniciais from '../../data/dados_iniciais.json';
import repositories from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    repositories.getAllWithVideos()
      .then((categoriasComVideo) => {
        // eslint-disable-next-line no-console
        setDadosIniciais(categoriasComVideo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é front-end?"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é front-end?"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      /> */}
    </PageDefault>

  );
}

export default App;
