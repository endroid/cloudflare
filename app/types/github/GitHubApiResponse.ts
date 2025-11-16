export interface GitHubApiResponse {
  readonly name: string;
  readonly description: string | null;
  readonly stargazers_count: number;
  readonly html_url: string;
}
