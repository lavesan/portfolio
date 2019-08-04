import React, { useState } from 'react';
import { RepoCard } from '../../components/github-card';
import { StyledProjectsPage, StyledGrayP } from './styles';

export const ProjectsPage = () => {
    const [repositoryData, setRepositoryData] = useState<any[]>([
        {
            id: 0,
          name: 'Teste 1',
          clone_url: 'https://github.com',
          topics: [
            'a',
            'b',
            'c'
          ],
          description: 'descrição teste',
          title:'Github'
        },
        {
            id: 1,
          name: 'Teste 2',
          clone_url: 'https://github.com',
          topics: [
            'tópico',
            'node',
            'javascript',
            'react',
            'jquery'
          ],
          description: 'descrição teste 2',
          title:'Github'
        },
        {
            id: 2,
          name: 'Teste 2',
          clone_url: 'https://github.com',
          topics: [
            'tópico',
            'node',
            'javascript',
            'react',
            'jquery'
          ],
          description: 'descrição teste 2',
          title:'Github'
        },
      ]);

    return (
        <StyledProjectsPage className="d-flex flex-column justify-content-center w-50">
            <div className="text-start">
                <h3>Meus projetos</h3>
                <StyledGrayP>Alguns projetos e bibliotecas que fiz</StyledGrayP>
            </div>
            <div>
                {repositoryData && repositoryData.map(repo => <RepoCard key={repo.id} {...repo} />)}
            </div>
        </StyledProjectsPage>
    )
}