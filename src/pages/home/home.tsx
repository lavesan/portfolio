import React from 'react';
import { StyledNeutralButton, StyledSuccessButton } from '../../components/buttons';
import { Link } from 'react-router-dom';
import { StyledPage } from '../about';
import { StyledProfileBox } from './styles';

export const HomePage: React.FunctionComponent<{ myImage: string }> = ({ myImage }) => {
 return (
     <StyledPage>
         <div className="row justify-content-center align-items-center">
             <div className="col-lg-6 col-md-12 d-flex justify-content-lg-end justify-content-center">
                <StyledProfileBox>
                    <img src={myImage} alt="Minha imagem" className="perfil-img" />
                </StyledProfileBox>
             </div>
            <div className="col-lg-6 col-md-12">
                <h2 className="title">Desenvolvedor Web freelancer</h2>
                {/* <h3 className="subtitle">front-end / back-end</h3> */}
                <p className="text">
                    Transformo sua idéia em um site, eventualmente ajudando o seu negócio a evoluir!
                    {/* Seja uma idéia para empreender ou me contratar como freelancer, pode entrar em contato! */}
                </p>
            </div>
         </div>
         <nav className="d-flex justify-content-center align-items-center mt-4">
             <Link to="/about">
                <StyledSuccessButton>Me conheça</StyledSuccessButton>
             </Link>
             <p className="ml-3 mr-3 mt-auto mb-auto">ou</p>
             <Link to="/contact">
                <StyledNeutralButton>
                    Me contacte
                </StyledNeutralButton>
            </Link>
         </nav>
     </StyledPage>
 )   
}