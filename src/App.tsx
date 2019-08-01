import React, { useEffect, useState } from 'react';
import './App.css';
import { RepoCard } from './components/github-card/card';
import { GithubService } from './services/github.service';
import myImage from './assets/perfil.jpg';

const App: React.FC = () => {
  const [repositoryData, setRepositoryData] = useState<any[]>([
    {
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

  const githubService = new GithubService();

  useEffect(() => {
    // githubService.getAllMyRepos().then(res => {
    //   const repos = res.map(({ name, clone_url, topics, description }: any) => {
    //     return {
    //       name,
    //       clone_url,
    //       topics,
    //       description
    //     }
    //   })
    //   setRepositoryData(repos);
    //   console.log('repos: ', repos);
    // }).catch(err => {

    // });
    // githubService.writeReposInfo();
  }, []);

  return (
    <div className="single-page">
      <header>
        <select name="" id="">
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </header>
      <div className="perfil-img-box">
        <img src={myImage} alt="Minha imagem" className="perfil-img" />
      </div>
      <p><strong>Valdery Alves Paes Júnior</strong></p>
      <p>Hi! I'm a web developer that operates in all the ends of the application.
        <br />If you have a proposal for me, contact me in one of the phones bellow
      </p>
      <p><span className="fas fa-map-marker-alt"></span>Jaboatão dos guararapes, PE, Brazil</p>
      <p title="whatsapp"><span className="fab fa-whatsapp"></span>+55(81)98540-5144</p>
      <p title="telegram"><span className="fab fa-telegram-plane"></span>+55(81)98540-5144</p>
      <h2>My projects</h2>
      <div className="repos-box">
        {repositoryData.map((repo, i) => <RepoCard key={i} {...repo} />)}
      </div>
      <footer className="footer-box">
        <a href="https://github.com/lavesan" target="_blank" className="fab fa-github" title="github"></a>
        <a href="https://www.linkedin.com/in/valdery-alves-a32653160" target="_blank" className="fab fa-linkedin-in" title="linkedin"></a>
        <a href="https://www.instagram.com/valpaesjr/" target="_blank" className="fab fa-instagram" title="instagram"></a>
        <a href="https://twitter.com/PaesValdery" target="_blank" className="fab fa-twitter" title="twitter"></a>
      </footer>
    </div>
  );
}

export default App;
