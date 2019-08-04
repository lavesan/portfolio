import React from 'react';
import './index.scss';

export const FooterComponent = () => {
    return (
        <footer className="footer-box">
            <div>
                <p className="title">
                    <span className="fas fa-map-marker-alt"></span> Jaboatão dos guararapes, PE, Brazil
                </p>
            </div>
            <div className="social-media-box">
                <a href="https://github.com/lavesan" target="_blank" className="fab fa-github github title" title="Github"></a>
                <a href="https://www.linkedin.com/in/valdery-alves-a32653160" target="_blank" className="fab fa-linkedin linkedin title" title="Linkedin"></a>
            </div>
        </footer>
    )
}