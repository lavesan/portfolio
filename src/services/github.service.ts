import fs, { readFile } from 'fs';
import * as path from 'path';

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

    writeReposInfo() {
        console.log('readFile: ', readFile);
        // fs.readFile(path.join(__dirname, '../assets/json/repos.json'), 'utf-8', (err, jsonString) => {
        //     if (err) {
        //         return err;
        //     }
        //     console.log('jsonString: ', jsonString);
        // });
    }
}