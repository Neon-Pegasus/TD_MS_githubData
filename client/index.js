import axios from 'axios';
import dotenv from 'dotev';
dotenv.config();

const axiosGitHub = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
});