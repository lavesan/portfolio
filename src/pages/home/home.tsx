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
                <h2 className="title">Desenvolvedor Web freelancer</h2>
                <h3 className="subtitle">front-end / back-end</h3>
                <p className="text">
                    Desenvolvo sites únicos que ajudam o seu negócio a evoluir.<br/>
                    Seja uma idéia para empreender ou me contratar como freelancer, pode entrar em contato!
                </p>
            </div>
         </div>
         <nav className="row justify-content-center align-items-center mt-4">
             <Link to="/about">
                <StyledSuccessButton>Me conheça</StyledSuccessButton>
             </Link>
             <p className="ml-3 mr-3 mt-auto mb-auto">ou</p>
             <a href="mailto:valdery.jur@gmail.com">
                <StyledNeutralButton>
                    <i className="far fa-envelope"></i> Me contacte
                </StyledNeutralButton>
            </a>
         </nav>
     </article>
 )   
}