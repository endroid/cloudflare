import { useLoaderData } from 'react-router';
import GitHubRepos from '../components/GitHubRepos';
import Navigation from '../components/Navigation';
import type { GitHubRepository } from '../types/github';
import { GithubClient } from '../services/GithubClient';

// Configure which repositories to display
const FEATURED_REPOS = [
  'qr-code',
  'teleporter',
  'installer',
  'calendar',
  'embed',
  'asset',
  'sudoku',
  'pdf',
];

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {repositories.length > 0 && <GitHubRepos repositories={repositories} />}
      </main>
    </div>
  );
}
