import React from 'react';
import './card.scss';
import styled from 'styled-components';

const StyledCard = styled.a`
    cursor: pointer;
    width: 400px;
    border: 1.3px solid ${({ theme }) => theme.neutral.primaryColor};
    padding: 20px;
    border-radius: 0 20px;
    height: 100%;
    color: ${({ theme }) => theme.neutral.primaryColor};
    margin: 0 40px 40px 0;
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.neutral.primaryColor};
    }
`;

const StyledImage = styled.div`
    border-radius: 50%;
    border: 1.3px solid #000;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RepoCard = ({ name, clone_url, topics, description, title }) => {
    return (
        <StyledCard href={clone_url} target="_blank" rel="noopener noreferrer" className="card" title={title}>
            <div className="upper-box">
                <StyledImage>
                    <img src="https://image.freepik.com/icones-gratis/github-logotipo_318-10832.jpg" width="50" alt="github" />
                </StyledImage>
                <div className="info-box">
                    <h3>{name}</h3>
                    <p className="text">{description}</p>
                </div>
            </div>
            <div className="tags-box">
                <strong>{topics && topics.map(topic => `#${topic} `)}</strong>
            </div>
        </StyledCard>
      )
}