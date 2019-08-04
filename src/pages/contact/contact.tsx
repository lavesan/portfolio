import React from 'react';
import { StyledNeutralButton} from '../../components/buttons';
import { StyledPage } from '../about';
import styled from 'styled-components';

const StyledSocialBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
`;

const StyledPhoneBox = styled.div`
    text-align: center;
`;

const StyledSocialLink = styled.a`
    font-size: 70px;
`;

export const ContactPage = (theme: any) => {
    return (
        <StyledPage>
            <h2 className="title">Vamos conversar</h2>
            <p className="subtitle">Tem algum projeto que você gostaria que eu trabalhasse? Ou que tal um bate-papo amigo?</p>
            <StyledSocialBox>
                <p className="title">Me envie uma mensagem</p>
                <StyledPhoneBox>
                    <StyledSocialLink href="https://t.me/valdery" className="fab fa-telegram mr-1 title telegram-icon link-icon" target="_blank" rel="noopener noreferrer" title="Telegram" style={{ paddingRight: '15px' }}></StyledSocialLink>
                    <StyledSocialLink href="https://wa.me/5581985405144" className="fab fa-whatsapp-square title whatsapp-icon link-icon" target="_blank" rel="noopener noreferrer" title="Whatsapp"></StyledSocialLink>
                    <br/><p className="subtitle mt-2">+55(81)98540-5144</p>
                </StyledPhoneBox>
                <p className="title">ou</p>
                <a href="mailto:valdery.jur@gmail.com" className="title">
                    <StyledNeutralButton>
                        <span className="far fa-envelope"></span> Me mande um email
                    </StyledNeutralButton>
                </a>
            </StyledSocialBox>
        </StyledPage>
    )
}