/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videosRepository';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { alterarEstado, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll().then((categoriasFormServer) => {
        setCategorias(categoriasFormServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === valores.categoria);
        console.log(categoriaEscolhida);
        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={alterarEstado}
        />

        <FormField
          label="URL"
          name="url"
          value={valores.url}
          onChange={alterarEstado}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={alterarEstado}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastro de categoria.
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
