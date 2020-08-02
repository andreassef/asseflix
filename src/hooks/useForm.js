/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    alterarEstado,
    clearForm,
  };
}

export default useForm;
