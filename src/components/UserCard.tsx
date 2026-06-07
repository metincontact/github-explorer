import { MapPin, ExternalLink, Globe, Users, BookOpen } from "lucide-react";
import type { GitHubUser } from "../types";

type UserCardProps = {
  user: GitHubUser;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl p-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-violet-600/[0.06] blur-[60px]" />

      <div className="relative flex gap-5 items-start">
        <div className="shrink-0 p-[2px] rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-fuchsia-500">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full block"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-white text-xl font-bold truncate leading-tight">
            {user.name || user.login}
          </h2>
          <p className="text-slate-500 text-sm mb-3 font-mono">@{user.login}</p>

          {user.bio && (
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{user.bio}</p>
          )}

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm mb-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Users className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-white font-semibold">{user.followers}</span>
              <span className="text-slate-600">followers</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="text-white font-semibold">{user.following}</span>
              <span className="text-slate-600">following</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <BookOpen className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-white font-semibold">{user.public_repos}</span>
              <span className="text-slate-600">repos</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
            {user.location && (
              <span className="flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                {user.location}
              </span>
            )}
            {user.blog && (
              <a
                href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-violet-400/80 hover:text-violet-300 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Website
              </a>
            )}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-violet-400/80 hover:text-violet-300 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
