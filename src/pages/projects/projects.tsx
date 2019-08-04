import React, { useState } from 'react';
import { RepoCard } from '../../components/github-card';
import { StyledPage } from '../about';
import reposData from '../../assets/json/repos.json';
import { IRepoData } from './interfaces';

export const ProjectsPage = () => {
    const [repositoryData] = useState<IRepoData[]>(reposData);

    return (
        <StyledPage className="d-flex flex-column justify-content-center">
            <div className="text-start">
                <h2 className="title">Meus projetos</h2>
                <p className="text">Alguns projetos e bibliotecas que fiz</p>
            </div>
            <div>
                {repositoryData && repositoryData.map(repo => <RepoCard key={repo.id} {...repo} />)}
            </div>
        </StyledPage>
    )
}