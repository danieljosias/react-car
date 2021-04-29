import React from 'react';
import './Main.scss';

import card3 from '../img/Onix.jpg';
import card4 from '../img/HB20.jpg';
import card5 from '../img/HONDA.jpg';

export default function Main() {
 return (
   <div>
       <section className="section-container">
          <h1 className="section-title">Carros</h1>
          
          <div className="card-container">
            
            <div className="card">
              <img className="card-img" src={card3} alt=""/>
              <h2 className="card-title">Onix</h2>
              <p className="card-text">R$ 62.150</p>
            </div>

            <div className="card">
              <img className="card-img" src={card4} alt=""/>
              <h2 className="card-title">HB20</h2>
              <p className="card-text">R$ 58.890</p>
            </div>

            <div className="card">
              <img className="card-img" src={card5} alt=""/>
              <h2 className="card-title">Honda Civic</h2>
              <p className="card-text">R$ 149.400</p>
            </div>

          </div>
       </section>
   </div>
 );
}