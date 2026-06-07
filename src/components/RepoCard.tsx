import { Star, GitFork } from "lucide-react";
import type { GitHubRepo } from "../types";

type RepoCardProps = {
  repo: GitHubRepo;
};

function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-violet-500/25 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-500/[0.04] to-indigo-500/[0.04]" />

      <div className="relative">
        <h3 className="text-slate-200 font-semibold text-sm group-hover:text-violet-300 transition-colors duration-200 truncate">
          {repo.name}
        </h3>
        {repo.description && (
          <p className="text-slate-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
            {repo.description}
          </p>
        )}
      </div>

      <div className="relative flex items-center gap-3 text-xs text-slate-600 mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
            <span className="text-slate-500">{repo.language}</span>
          </span>
        )}
        <span className="flex items-center gap-1 ml-auto">
          <Star className="w-3.5 h-3.5" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-3.5 h-3.5" />
          {repo.forks_count}
        </span>
      </div>
    </a>
  );
}

export default RepoCard;
