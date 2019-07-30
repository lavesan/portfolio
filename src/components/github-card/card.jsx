import React from 'react';
import './card.scss';

export const RepoCard = ({ name, clone_url, topics, description }) => {
    return (
        <a href={clone_url} target="_blank" className="card">
            <div className="upper-box">
                <div className="image-box">
                    <img src="https://image.freepik.com/icones-gratis/github-logotipo_318-10832.jpg" width="50" alt="github" />
                </div>
                <div className="info-box">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="tags-box">
                <strong>{topics && topics.map(topic => `${topic} `)}</strong>
            </div>
        </a>
      )
}