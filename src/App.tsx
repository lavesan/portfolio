import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/github-card/card';
import { GithubService } from './services/github.service'

const App: React.FC = () => {
  const [repositoryData, setRepositoryData] = useState<any[]>([]);

  const githubService = new GithubService();

  useEffect(() => {
    githubService.getAllMyRepos().then(res => {

      
      const repos = res.map(({ name, clone_url, topics, description }: any) => {
        return {
          name,
          clone_url,
          topics,
          description
        }
      })
      setRepositoryData(repos);
      console.log('repos: ', repos);
    }).catch(err => {

    });
  }, []);

  return (
    <>
      {repositoryData.map((repo, i) => <Card key={i} {...repo} />)}
    </>
  );
}

export default App;
