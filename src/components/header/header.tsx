import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './styles';

let navBar: any;
let canDrag: boolean;
let lastX = 0;

/** @description Activates the horizontal slide event */
const activateSlide = function(e: any) {
    canDrag = true;
    lastX = e.pageX;
}

/** @description Deactivate the horizontal slide event */
const deactivateSlide = function() {
    canDrag = false;
}

/** @description Handles the horizontal Slide */
const horizontalSlide = function(e: any) {
    // Coleta a largura total da tela
    let scrollContentWidth = window.innerWidth;
    
    if (canDrag) {
        console.log('Entrou');
        const { style: { left } } = navBar;
        // navBar = 'translate(40px)';
        // get actual width of the box if it's resized and decrement in the max drag width
        const canMove =
            scrollContentWidth - Math.floor(navBar.offsetWidth);
        const maxDragWidth = canMove >= 0 ? canMove : 0;

        // const style = $(context)
        //     .find(".father-box")
        //     .attr("style");
        
        const findTransform = left.indexOf("translate");
        const translate = left.substring(findTransform);
        const actualPositionX = Number(translate.replace(/\D/g, "")) || 0;

        const pageX = e.type == 'touchmove' ? e.touches[0].pageX : e.pageX;
        if (!lastX) {
            lastX = pageX;
        } 
        const movedValue = Math.abs(lastX) - pageX;
        let finalPositionX = Math.abs(actualPositionX + movedValue);
        lastX = e.pageX;

        if (actualPositionX + movedValue <= 0) finalPositionX = 0;
        if (actualPositionX + movedValue >= maxDragWidth)
        finalPositionX = maxDragWidth;

        console.log('finalPositionX: ', finalPositionX);

        navBar.style.transform = `translate(-${finalPositionX}px)`;
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
                            {/* <span className="fas fa-home"></span> */}
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            {/* <span className="fas fa-folder"></span> */}
                            <span>Projetos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/process">
                            {/* <span className="fas fa-project-diagram"></span> */}
                            <span>Processo</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            {/* <span className="fas fa-user"></span> */}
                            <span>Sobre mim</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            {/* <span className="fas fa-phone"></span> */}
                            <span>Contato</span>
                        </NavLink>
                    </li>
                </ul>   
            </nav>
        </StyledHeader>
    )
}