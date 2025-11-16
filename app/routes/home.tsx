import { useLoaderData } from 'react-router';
import type { GitHubRepository } from '../types/github/GitHubRepository';
import { GithubClient } from '../services/GithubClient';
import GitHubRepos from '../components/GitHubRepos';

const FEATURED_REPOS = [
  'qr-code',
  'teleporter',
  'installer',
  'calendar',
  'embed',
  'asset',
  'sudoku',
  'pdf',
] as const;

export function meta() {
  return [
    { title: 'Endroid Cloudflare Worker' },
    { name: 'description', content: 'Simple, clean UI with Tailwind CSS v4' },
  ];
}

export async function loader() {
  const client = new GithubClient();
  const repos = await client.fetchUserRepositories('endroid');
  return client.filterAndMapRepositories(repos, FEATURED_REPOS);
}

export default function Home() {
  const repositories = useLoaderData<GitHubRepository[]>();
  return repositories.length > 0 ? <GitHubRepos repositories={repositories} /> : null;
}
