import React from 'react';
import {Link} from 'react-router-dom';
import './Carro-luxo.scss';

export default function Luxo() {
 return (
   <div>
       <Link className="link2" to="/luxo">Carros Luxuosos</Link>
   </div>
 );
}