import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './styles';

export const HeaderComponent = () => {
    return (
        <StyledHeader>
            <h1 className="text-center title">Valdery Alves</h1>
            <div className="gray-font row flex-row justify-content-center align-items-center">
                <p className="col-md-6 col-12 d-flex align-items-center justify-content-md-end justify-content-center mb-0">
                    <span className="fab fa-telegram-plane mr-1" title="Telegram"></span>
                    <span className="fab fa-whatsapp mr-1" title="Whatsapp"></span> +55(81)98540-5144
                </p>
                <span className="col-md-6 col-12 d-flex align-items-center justify-content-center">
                    <span className="far fa-envelope mr-1"></span> valdery.jur@gmail.com
                </span>
            </div>
            <nav className="header-nav">
                <ul className="text-center h-100">
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projetos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/process">Processo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Sobre mim</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contato</NavLink>
                    </li>
                </ul>   
            </nav>
        </StyledHeader>
    )
}