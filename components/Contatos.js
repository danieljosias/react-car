import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import './Contatos.scss';

export default function Contatos() {
 return (
   <div>
       <h1 className="title">Contatos</h1>
       <div className="container-contatos">
    
         <p><strong>📞Telefone</strong>:(xx) xxxx-xxxx</p>
         <p><strong>📧Email</strong>: email@domínio.dev</p>
         <p><strong>📱Celular</strong>: (xx) x xxxx-xxxx</p>
         
       </div>
       
       <h2>Redes Sociais</h2>
       <div className="container-redesSociais">
          
          <a href="https://www.instagram.com/" target="_blanck"> <FaInstagramSquare size="40" /> </a>
          <a href="https://www.facebook.com/" target="_blanck"> <FaFacebookSquare size="40" /> </a>
          <a href="https://www.linkedin.com/" target="_blanck"> <FaLinkedin size="40" /> </a>

       </div>

       <h2>Endereço</h2>
       <div className="container-endereco">
          
       <p className="text-endereco"><strong>🚗Como chegar</strong>:País das Maravilhas , RJ, 007</p>
       <p className="text-endereco"><strong>✅Referência</strong>:Próximo a Nárnia </p>
        

       </div>

      
   </div>
 );
}