import type { GitHubApiResponse } from '../types/github/GitHubApiResponse';
import type { GitHubRepository } from '../types/github/GitHubRepository';

export class GithubClient {
  private readonly baseUrl = 'https://api.github.com';
  private readonly userAgent = 'Cloudflare-Worker';

  async fetchUserRepositories(username: string): Promise<GitHubApiResponse[]> {
    const response = await fetch(`${this.baseUrl}/users/${username}/repos?per_page=100`, {
      headers: {
        'User-Agent': this.userAgent,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json() as GitHubApiResponse[];
  }

  filterAndMapRepositories(
    repos: GitHubApiResponse[],
    featuredRepoNames: readonly string[]
  ): GitHubRepository[] {
    return featuredRepoNames
      .map((name) => repos.find((repo) => repo.name === name))
      .filter((repo): repo is GitHubApiResponse => repo !== undefined)
      .map((repo): GitHubRepository => ({
        name: repo.name,
        description: repo.description ?? '',
        stargazersCount: repo.stargazers_count,
        htmlUrl: repo.html_url,
      }));
  }
}
