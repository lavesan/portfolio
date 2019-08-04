import React, { useState } from 'react';
import { RepoCard } from '../../components/github-card';
import { StyledProjectsPage, StyledGrayP } from '../../components/texts';

export const ProjectsPage = () => {
    const [repositoryData] = useState<any[]>([
        {
          id: 0,
          name: 'Metal Bird',
          clone_url: 'https://github.com/lavesan/Metal-Bird',
          topics: [
            'flappy-bird-game',
            'javascript',
            'html5',
            'css3',
          ],
          description: 'Um jogo de flappy bird customizado',
          title:'Github'
        },
        {
          id: 1,
          name: 'Jst-timeline',
          clone_url: 'https://github.com/justapagamentos/jst-timeline',
          topics: [
            'jquery',
            'jquery-plugin',
            'timeline-component',
          ],
          description: 'Uma timeline horizontal estilosa',
          title:'Github'
        },
        {
          id: 2,
          name: 'Portfolio',
          clone_url: 'https://github.com/lavesan/portfolio',
          topics: [
            'react',
            'fetch-api',
            'react-hooks',
            'typescript',
            'sass',
          ],
          description: 'Este portfólio',
          title:'Github'
        },
        {
          id: 3,
          name: 'Desafio Front-End',
          clone_url: 'https://github.com/lavesan/Desafio-BossaBox-front-end',
          topics: [
            'react',
            'typescript',
            'axios',
            'react-hooks',
            'formik',
            'styled-components',
          ],
          description: 'Desafio de front-end que utilizei para ser aceito na plataforma Bossabox',
          title:'Github'
        },
        {
          id: 4,
          name: 'Desafio Back-End',
          clone_url: 'https://github.com/lavesan/Desafio-BossaBox-back-end',
          topics: [
            'node.js',
            'express',
            'typescript',
            'nestjs',
            'class-validator',
            'postgresql',
          ],
          description: 'Desafio de back-end que utilizei para ser aceito na plataforma Bossabox',
          title:'Github'
        },
      ]);

    return (
        <StyledProjectsPage className="d-flex flex-column justify-content-center w-50">
            <div className="text-start">
                <h3 className="title">Meus projetos</h3>
                <p className="text">Alguns projetos e bibliotecas que fiz</p>
            </div>
            <div>
                {repositoryData && repositoryData.map(repo => <RepoCard key={repo.id} {...repo} />)}
            </div>
        </StyledProjectsPage>
    )
}