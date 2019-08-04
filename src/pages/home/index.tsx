import React from 'react';
import './index.scss'
import { StyledNeutralButton, StyledSuccessButton } from '../../components/buttons';
import { Link } from 'react-router-dom';

export const HomePage: React.FunctionComponent<{ myImage: string }> = ({ myImage }) => {
 return (
     <article className="mt-5">
         <div className="row justify-content-center align-items-center">
             <div className="col-6 d-flex justify-content-end">
                <div className="perfil-img-box">
                <img src={myImage} alt="Minha imagem" className="perfil-img" />
                </div>
             </div>
            <div className="col-6">
                <h2>Desenvolvedor Web freelancer</h2>
                <h3 className="subtitle">front-end / back-end</h3>
                <p className="describe">
                    Sites únicos que convertem visitantes em clientes e ajudam o seu negócio a evoluir
                </p>
            </div>
         </div>
         <nav className="row justify-content-center align-items-center mt-4">
             <Link to="/about">
                <StyledSuccessButton>Me conheça</StyledSuccessButton>
             </Link>
             <p className="ml-3 mr-3 mt-auto mb-auto">ou</p>
             <Link to="/contact">
                <StyledNeutralButton>Me contacte</StyledNeutralButton>
            </Link>
         </nav>
     </article>
 )   
}