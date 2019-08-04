import React from 'react';
import { StyledPage } from '../about';

export const ProcessPage = () => {
    return (
        <StyledPage>
            <div>
                <h4 className="title">Descobrimento</h4>
                <p className="text">
                    Primeiro irei lhe fazer muitas perguntas. Qual o público alvo? Quais os objetivos do projeto?
                    Vamos construir do zero ou já existe algo pronto? Você já tem wireframes? Qual o prazo?
                    Isto servirá para eu desenvolver o site da melhor forma e ter um entendimento de como desenvolver futuramente. 
                </p>
            </div>
            <div>
                <h4 className="title">Análise</h4>
                <p className="text">
                    Procuro sobre o mercado deste projeto e analiso tudo que vou precisar desenvolver, organizo quadros de 
                    atividades e escolho as tecnologias que irei utilizar (se esta decisão ficar comigo). Me mantenho em contato
                    constante com você para acertamos tudo.
                </p>
            </div>
            <div>
                <h4 className="title">Desenvolvimento</h4>
                <p className="text">
                    Parto para o desenvolvimento e meto a mão na massa!
                </p>
            </div>
        </StyledPage>
    );
}