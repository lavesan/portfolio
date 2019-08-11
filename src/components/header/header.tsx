import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader, navMinWidth } from './styles';

let navBar: any;
let canDrag: boolean;
let lastX: number;

/** @description Activates the horizontal slide event */
const activateSlide = (e: any) => {
    canDrag = true;

    // Verifica se o movimento é por touch ou por mouse
    lastX = e.type == 'touchstart' ? e.changedTouches[0].pageX : e.pageX;
    const { style: { transform } } = navBar;

    const translate = transform.split('.');
    const actualPositionX = Number(translate[0].replace(/\D/g, "")) || 0;
    lastX = actualPositionX + lastX;
}

/** @description Deactivate the horizontal slide event */
const deactivateSlide = (e: any) => {
    canDrag = false;
}

/** @description Handles the horizontal Slide */
const horizontalSlide = (e: any) => {
    if (canDrag) {
        // Coleta a largura total da tela
        let scrollContentWidth = window.innerWidth;

        const canMove =
            Math.floor(navBar.offsetWidth) - scrollContentWidth;
        const maxDragWidth = canMove >= 0 ? canMove : 0;

        // Verifica se o movimento é por touch ou por mouse
        const pageX = e.type == 'touchmove' ? e.touches[0].pageX : e.pageX;
        if(!lastX)
            lastX = pageX;

        const movedValue = Math.abs(lastX) - pageX;
        
        let finalPositionX = Math.abs(movedValue);

        // Condições que delimitam o scroll
        // (para não ultrapassar do tamanho do componente)
        if (movedValue <= 0) finalPositionX = 0;
        if (movedValue >= maxDragWidth)
        finalPositionX = maxDragWidth;

        // Escreve no style o transform
        navBar.style.transform = `translate(-${finalPositionX}px)`;

        if (scrollContentWidth < navMinWidth) {
            
        }
    }
}

export const HeaderComponent = () => {
    useEffect(() => {
        navBar = document.getElementById('nav-bar');
    }, []);

    return (
        <StyledHeader>
            <h1 className="text-center title">Valdery Alves</h1>
            <div className="gray-font row flex-row justify-content-center align-items-center">
                <p className="col-md-6 col-12 d-flex align-items-center justify-content-md-end justify-content-center mb-0">
                    <span className="fab fa-telegram-plane mr-1" title="Telegram"></span>
                    <span className="fab fa-whatsapp mr-1" title="Whatsapp"></span> +55(81)98540-5144
                </p>
                <p className="col-md-6 col-12 d-flex align-items-center justify-content-md-start justify-content-center mb-0">
                    <span className="far fa-envelope mr-1"></span> valdery.jur@gmail.com
                </p>
            </div>
            <nav 
                id="nav-bar"
                className="header-nav"
                onTouchStart={activateSlide}
                onTouchMove={horizontalSlide}
                onMouseDown={activateSlide}
                onMouseUp={deactivateSlide}
                onMouseLeave={deactivateSlide}
                onMouseMove={horizontalSlide}
            >
                <ul className="text-center h-100">
                    <li>
                        <NavLink to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            Projetos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/process">
                            Processo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            Sobre mim
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contato
                        </NavLink>
                    </li>
                </ul>   
            </nav>
        </StyledHeader>
    )
}