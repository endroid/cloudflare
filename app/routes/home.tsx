import { useLoaderData } from 'react-router';
import GitHubRepos from '../components/GitHubRepos';
import Navigation from '../components/Navigation';

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

interface GitHubRepository {
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
}

interface LoaderData {
  repositories: GitHubRepository[];
  error?: string;
}

export function meta() {
  return [
    { title: 'Endroid Cloudflare Worker' },
    { name: 'description', content: 'Simple, clean UI with Tailwind CSS v4' },
  ];
}

export async function loader() {
  try {
    const response = await fetch('https://api.github.com/users/endroid/repos?per_page=100', {
      headers: {
        'User-Agent': 'Cloudflare-Worker',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = (await response.json()) as GitHubRepository[];

    // Filter repos to only include featured ones and maintain the order
    const featuredRepos = FEATURED_REPOS.map((name) =>
      repos.find((repo) => repo.name === name)
    ).filter((repo): repo is GitHubRepository => repo !== undefined);

    return { repositories: featuredRepos };
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return { repositories: [], error: 'Failed to load repositories' };
  }
}

export default function Home() {
  const { repositories, error } = useLoaderData<LoaderData>();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error ? (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        ) : (
          repositories.length > 0 && <GitHubRepos repositories={repositories} />
        )}
      </main>
    </div>
  );
}
