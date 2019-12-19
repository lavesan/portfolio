import React from 'react';
import { StyledNeutralButton} from '../../components/buttons';
import { StyledPage } from '../about';
import { StyledPhoneBox, StyledSocialBox, StyledSocialLink } from './styles';

export const ContactPage = () => {
    return (
        <StyledPage>
            <h2 className="title">Vamos conversar</h2>
            <p className="subtitle">Tem algum projeto que você gostaria que eu trabalhasse?</p>
            <StyledSocialBox>
                <p className="title">Me envie uma mensagem</p>
                <StyledPhoneBox>
                    <StyledSocialLink href="https://t.me/valdery" className="fab fa-telegram mr-1 title telegram-icon link-icon" target="_blank" rel="noopener noreferrer" title="Telegram" style={{ paddingRight: '15px' }}></StyledSocialLink>
                    <StyledSocialLink href="https://wa.me/5581985405144" className="fab fa-whatsapp-square title whatsapp-icon link-icon" target="_blank" rel="noopener noreferrer" title="Whatsapp"></StyledSocialLink>
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