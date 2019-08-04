import React from 'react';
import './index.scss';

export const ProcessPage = () => {
    return (
        <div className="mt-5 process-page">
            <div className="row">
                <div className="col-6 d-flex justify-content-end process-icon">
                    <div className="text-center">
                        <i className="fas fa-search"></i>
                        <h6>Descobrimento</h6>
                    </div>
                </div>
                <div className="col-6">
                    <p className="text">
                        Primeiro irei lhe fazer muitas perguntas. Qual o público alvo? Quais os objetivos do projeto?
                        Vamos construir do zero ou já existe algo pronto? Você já tem wireframes? Qual o prazo?
                        Isto servirá para eu desenvolver o site da melhor forma e ter um entendimento de como desenvolver futuramente. 
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-end process-icon">
                    <div className="text-center">
                        <i className="fas fa-book-reader"></i>
                        <h6>Análise</h6>
                    </div>
                </div>
                <div className="col-6">
                    <p className="text">
                        Procuro sobre o mercado deste projeto e analiso tudo que vou precisar desenvolver, organizo quadros de 
                        atividades e escolho as tecnologias que irei utilizar (se esta decisão ficar comigo). Me mantenho em contato
                        constante com você para acertamos tudo.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-end process-icon">
                    <div className="text-center">
                        <i className="fas fa-code"></i>
                        <h6>Desenvolvimento</h6>
                    </div>
                </div>
                <div className="col-6">
                    <p className="text">
                        Parto para o desenvolvimento e meto a mão na massa!
                    </p>
                </div>
            </div>
        </div>
    );
}