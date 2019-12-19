import React from 'react';
import { StyledPage } from './styles';

export const AboutPage = () => {
    return (
        <StyledPage>
            <h2 className="title">Quem sou eu?</h2>
            <p className="text">
                Olá! Eu me chamo Valdery e faço um site do começo ao fim.<br />
                Atualmente estou cursando engenharia da computação na UPE e tive no desenvolvimento de sites uma paixão
                inexplicável ao ver linhas de código se transformando em uma interface e servindo dados.<br />
                Meu objetivo é utilizar meu conhecimento para desenvolver websites que transmitam suas idéias de uma
                forma clara, objetiva e organizada, tirando-as do papel e as trazendo à realidade.<br />
                Pode vir com a demanda!
            </p>
            <h4 className="title">Especialidades</h4>
            <ul className="text">
                <li>Sites que se ajustam a todos os tamanhos de tela;</li>
                <li>Código bem escrito e documentado, tornando fácil de se efetuar futuras manutenções;</li>
                <li>Frameworks, linguagens e bibliotecas com bom suporte;</li>
                <li>Mais informações no meu <a href="https://www.linkedin.com/in/valdery-alves-a32653160" target="_blank" rel="noopener noreferrer">linkedin</a>.</li>
            </ul>
        </StyledPage>
    )
}