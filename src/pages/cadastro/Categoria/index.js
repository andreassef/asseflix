import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    // a ação de colocar as variaveis dentro dos colchetes significa que estamos abrindo 
    // a função apos a atribuição 
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);

    // função setValor, determina um valor específico para cada campo do formulario
    function setValor(chave, valor) {
        setValores({
            ...valores, 
            [chave]:valor, // a chave entre colchetes vai variar, retornando o valor de cada chave.
        })
    }

    // alterarEstado pega o input do atributo name do formulário
    function alterarEstado(atributosDoEvento) {
        //const { getAttribute, value } = atributosDoEvento.target;
        // por meio do console.log conseguimentos visualizar as informações que a função
        // está recebendo via parametro.
        setValor(atributosDoEvento.target.getAttribute('name'), atributosDoEvento.target.value);   
    }

    return (
        <PageDefault>
            <h1>cadastro de categoria: {valores.nome}</h1>
            <form onSubmit={function handleSubmite(atributosDoEvento) {
                atributosDoEvento.preventDefault();
                //console.log("Você tentou enviar o form");
                // os tres pontos antes de categorias significa que estamos abrindo tudo que tem 
                // dentro dessa variavel e substituindo pelo segundo parametro.
                 setCategorias([...categorias, valores])
                 setValores(valoresIniciais)
            }}>
                <FormField
                    label = "Nome da categoria"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={alterarEstado}
                />

                <FormField
                    label = "Descricao"
                    type=""
                    name="descricao"
                    value={valores.descricao}
                    onChange={alterarEstado}
                />  

                {/* <div>
                    <label>
                        Descrição:
                        <textarea type="text" value={valores.descricao} onChange={alterarEstado} name="descricao"></textarea>
                    </label>
                </div> */}

                <FormField
                    label = "Cor"
                    type="color"
                    name="cor"
                    value={valores.cor}
                    onChange={alterarEstado}
                />
                {/* <div>
                    <label>
                        Cor:
                        <input type="color" value={valores.cor} onChange={alterarEstado} name="cor"></input>
                    </label>
                </div> */}

                <div>
                    <button>
                        Cadastro
                    </button>
                </div>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            
            <Link to="/">
                Ir para Home.
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;