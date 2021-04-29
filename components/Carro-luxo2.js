import React from 'react';
import './Carro-luxo2.scss';

import card1 from '../img/Ferrari.jpg';
import card2 from '../img/Mercedes.jpg';
import card3 from '../img/Evoque.jpg';

export default function Luxo2() {
 return (
   <div>
       <section className="section-container">
          <h1 className="section-title">Carros Luxuosos</h1>
          
          <div className="card-container">
            
            <div className="card">
              <img className="card-img" src={card1} alt=""/>
              <h2 className="card-title">Ferrari</h2>
              <p className="card-text">R$ 1.480.000</p>
            </div>

            <div className="card">
              <img className="card-img" src={card2} alt=""/>
              <h2 className="card-title">Mercedez</h2>
              <p className="card-text">R$ 856.000</p>
            </div>

            <div className="card">
              <img className="card-img" src={card3} alt=""/>
              <h2 className="card-title">Evoque</h2>
              <p className="card-text">R$ 369.950</p>
            </div>

          </div>
       </section>
   </div>
 );
}