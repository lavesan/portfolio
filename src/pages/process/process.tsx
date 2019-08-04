import React from 'react';
import './index.scss';

export const ProcessPage = () => {
    return (
        <div className="mt-5 process-page">
            <div className="row">
                <div className="col-6">
                    <i className="fas fa-search"></i>
                    <h3>Descobrimento</h3>
                </div>
                <div className="col-6">
                    <p>
                        Primeiro irei lhe fazer muitas perguntas. Qual o público alvo? Quais os objetivos do projeto?
                        Vamos construir do zero ou já existe algo pronto? Você já tem wireframes? Qual o prazo?.<br />
                        Isto servirá para eu desenvolver o site da melhor forma e ter um entendimento de como desenvolver futuramente. 
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <i className="fas fa-book-reader"></i>
                    <h3>Análise</h3>
                </div>
                <div className="col-6">
                    <p>
                        Procuro sobre o mercado deste projeto e analiso tudo que vou precisar desenvolver, organizo quadros de 
                        atividades e escolho as tecnologias que irei utilizar (se essa decisão ficar comigo). Me mantenho em contato
                        constante com você para acertamos tudo.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <i className="fas fa-code"></i>
                    <h3>Desenvolvimento</h3>
                </div>
                <div className="col-6">
                    <p>
                        Parto para o desenvolvimento e meto a mão na massa!
                    </p>
                </div>
            </div>
        </div>
    );
}