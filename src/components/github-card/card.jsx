import React from 'react';
import { StyledCard, StyledImage } from './styles';

export const RepoCard = ({ name, clone_url, topics, description, title }) => {
    return (
        <StyledCard href={clone_url} target="_blank" rel="noopener noreferrer" className="card" title={title}>
            <div className="d-flex flex-row">
                <StyledImage>
                    <img src="https://image.freepik.com/icones-gratis/github-logotipo_318-10832.jpg" width="50" alt="github" />
                </StyledImage>
                <div className="ml-3">
                    <h3>{name}</h3>
                    <p className="m-0 subtitle d-lg-block d-none">{description}</p>
                </div>
            </div>
            <p className="m-0 subtitle d-lg-none d-block">{description}</p>
            <div className="mt-2">
                <strong>{topics && topics.map(topic => `#${topic} `)}</strong>
            </div>
        </StyledCard>
      )
}