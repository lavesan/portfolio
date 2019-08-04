import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        <header className="header-box">
            <h1 className="text-center title">Valdery Alves</h1>
            <div className="gray-font d-flex flex-row justify-content-center">
                <p className="mr-4">
                    {/* <span className="fas fa-phone mr-1" title="Telefone"></span> */}
                    <a href="https://t.me/valdery" className="fab fa-telegram-plane mr-1" target="_blank" rel="noopener noreferrer" title="Telegram"></a>
                    <a href="https://wa.me/5581985405144" className="fab fa-whatsapp" target="_blank" rel="noopener noreferrer" title="Whatsapp"></a> +55(81)98540-5144
                </p>
                <a href="mailto:valdery.jur@gmail.com">
                    <i className="far fa-envelope"></i> valdery.jur@gmail.com
                </a>
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
                </ul>   
            </nav>
        </header>
    )
}