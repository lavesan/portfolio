import React from 'react';
import './index.scss';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        <header className="header-box mt-5">
            <h1 className="text-center">Valdery Alves</h1>
            <div className="gray-font d-flex flex-row justify-content-center">
                <p className="mr-4">
                    <i className="fas fa-phone"></i> +55(81)98540-5144
                </p>
                <p>
                    <i className="far fa-envelope"></i> valdery.jur@gmail.com
                </p>
            </div>
            <nav className="header-nav">
                <ul className="text-center h-100">
                    <li className="">
                        <NavLink to="/home" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/projects">Projetos</NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/process">Processo</NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/about">Sobre mim</NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/contact">Contato</NavLink>
                    </li>
                </ul>   
            </nav>
        </header>
    )
}