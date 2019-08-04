import React from 'react';
import { StyledPage } from './styles';

export const AboutPage = () => {
    return (
        <StyledPage>
            <h2 className="title">Quem sou eu?</h2>
            <p className="text">
                Olá! Eu sou um desenvolvedor Web que atua em todos os fins de um site.<br />
                Estou cursando engenharia da computação na UPE e tive no desenvolvimento de sites uma paixão
                inexplicável ao ver linhas de código se transformando em uma interface e servindo dados.<br />
                Meu objetivo é utilizar meu conhecimento para desenvolver websites que transmitam suas idéias de uma
                forma clara, objetiva e organizada, tirando-as do papel e as trazendo à realidade.<br />
                Pode vir com a demanda!
            </p>
            <h4 className="title">Especialidades</h4>
            <ul className="text">
                <li>Ótimos websites em todos os tamanhos de tela;</li>
                <li>Código bem escrito e documentado, fácil de se efetuar futuras manutenções;</li>
                <li>Frameworks, linguagens e bibliotecas com bom suporte;</li>
                <li>Websites com acessibilidade;</li>
                <li>Você pode ver as tecnologias que desenvolvo e minha experiência no linkedin <a href="https://www.linkedin.com/in/valdery-alves-a32653160" target="_blank" rel="noopener noreferrer">clicando aqui</a>.</li>
            </ul>
        </StyledPage>
    )
}