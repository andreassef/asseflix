/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  // a ação de colocar as variaveis dentro dos colchetes significa que estamos abrindo
  // a função apos a atribuição
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { alterarEstado, valores, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_SERVER = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://dev-asseflix.herokuapp.com/categorias';
    fetch(URL_SERVER).then(async (requestServer) => {
      const response = await requestServer.json();
      setCategorias([
        ...response,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        cadastro de categoria:
        {valores.nome}
      </h1>
      <form onSubmit={function handleSubmite(atributosDoEvento) {
        atributosDoEvento.preventDefault();
        // console.log("Você tentou enviar o form");
        // os tres pontos antes de categorias significa que estamos abrindo tudo que tem
        // dentro dessa variavel e substituindo pelo segundo parametro.
        setCategorias([...categorias, valores]);
        clearForm(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={alterarEstado}
        />

        <FormField
          label="Descricao"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={alterarEstado}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={alterarEstado}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          cargando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.titulo}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home.
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
