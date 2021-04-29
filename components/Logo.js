import React from 'react';
import {FaCar} from 'react-icons/fa';
import './Logo.scss';

export default function Logo() {
 return (
   <div className="container-logo">
       <h1 className="container-title">React Car <FaCar className="icon" size={25} ></FaCar> </h1>
   </div>
 );
}