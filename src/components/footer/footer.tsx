import React from 'react';
import { StyledFooter } from './styles';

export const FooterComponent = () => {
    return (
        <StyledFooter>
            <div className="d-flex align-items-center">
                <p className="title mb-0">
                    <span className="fas fa-map-marker-alt"></span> Jaboatão dos guararapes, PE, Brasil
                </p>
            </div>
            <div className="social-media-box">
                <a href="https://github.com/lavesan" target="_blank" className="fab fa-github title github-icon link-icon" title="Github"></a>
                <a href="https://www.linkedin.com/in/valdery-alves-a32653160" target="_blank" className="fab fa-linkedin title linkedin-icon link-icon" title="Linkedin"></a>
            </div>
        </StyledFooter>
    )
}