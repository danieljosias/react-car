import React from 'react';
import {Link} from 'react-router-dom';
import './Navegacao.scss';

export default function Navegacao() {
 return (
   <div className="container-navagacao">
       <Link className="link" to="/">Principal</Link>
       <Link className="link" to="/carros">Carros</Link>
       <Link className="link" to="/contatos">Contatos</Link>
   </div>
 );
}