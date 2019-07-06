const GITHUB_API_URL = 'https://api.github.com/';
const REPO_OWNER = 'lavesan';

export class GithubService {
    getAllMyRepos(): Promise<any> {
        const options = {
            method: 'GET'
        }
        return fetch(`${GITHUB_API_URL}users/${REPO_OWNER}/repos`, options)
            .then(res => res.json());
    }
}