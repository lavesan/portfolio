import React from 'react';
import './card.scss';

export const Card = () => {
    return (
        <div className="card">
            <a className="image-box">
                <img src="https://image.freepik.com/icones-gratis/github-logotipo_318-10832.jpg" width="50" alt="github" />
            </a>
            <div className="info-box">
                <h3>Nome do repo</h3>
                <p>Descrição breve do repo</p>
            </div>
        </div>
      )
}