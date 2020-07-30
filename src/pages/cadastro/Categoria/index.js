/* eslint-disable linebreak-style */
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  // a ação de colocar as variaveis dentro dos colchetes significa que estamos abrindo
  // a função apos a atribuição
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  // função setValor, determina um valor específico para cada campo do formulario
  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor, // a chave entre colchetes vai variar, retornando o valor de cada chave.
    });
  }

  // alterarEstado pega o input do atributo name do formulário
  function alterarEstado(atributosDoEvento) {
    // const { getAttribute, value } = atributosDoEvento.target;
    // por meio do console.log conseguimentos visualizar as informações que a função
    // está recebendo via parametro.
    setValor(atributosDoEvento.target.getAttribute('name'), atributosDoEvento.target.value);
  }

  useEffect(() => {
    console.log("useEffect aqui");
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP).then(async (resquestServer) => {
      const request = await resquestServer.json();
      setCategorias(...request);
    });
  });

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
        setValores(valoresIniciais);
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

        <Button>
          Cadastro
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.nome}>
            {categoria.nome}
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
