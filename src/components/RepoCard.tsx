import type { GitHubRepo } from "../types";

type RepoCardProps = {
  repo: GitHubRepo;
};

function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-colors block"
    >
      <h3 className="text-white font-semibold mb-1">{repo.name}</h3>
      {repo.description && (
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {repo.description}
        </p>
      )}
      <div className="flex gap-3 text-xs text-gray-500">
        {repo.language && (
          <span className="text-blue-400">{repo.language}</span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>
    </a>
  );
}

export default RepoCard;
