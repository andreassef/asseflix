/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Asseflix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Adicionar vídeo
      </Button>
    </nav>
  );
}

export default Menu;
