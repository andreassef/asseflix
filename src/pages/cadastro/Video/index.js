import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>cadastro de Video</h1>

            <Link to="/cadastro/categoria">
                Cadastro de categoria.
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;