import React from 'react';
import { StyledPage } from '../about';

export const ProcessPage = () => {
    return (
        <StyledPage>
            <div>
                <h4 className="title">Conversa</h4>
                <p className="text">
                    Primeiro irei lhe fazer algumas perguntas. Qual o público alvo? Quais os objetivos do projeto?
                    Vamos construir do zero ou já existe algo pronto? Qual o prazo?
                    Com isto poderemos ter uma conversa aberta cheia de idéias para deixarmos esta sua idéia da
                    melhor forma que conseguirmos!
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
                    Parto para a ação e meto a mão na massa!
                </p>
            </div>
        </StyledPage>
    );
}