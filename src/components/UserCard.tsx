import type { GitHubUser } from "../types";

type UserCardProps = {
  user: GitHubUser;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 flex gap-6 items-start border border-gray-700">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full border-2 border-gray-600"
      />

      <div className="flex-1">
        <h2 className="text-white text-2xl font-bold">
          {user.name || user.login}
        </h2>
        <p className="text-gray-400 text-sm mb-3">@{user.login}</p>

        {user.bio && <p className="text-gray-300 text-sm mb-3">{user.bio}</p>}

        <div className="flex gap-4 text-sm text-gray-400 mb-3">
          <span>
            <span className="text-white font-semibold">{user.followers}</span>{" "}
            followers
          </span>
          <span>
            <span className="text-white font-semibold">{user.following}</span>{" "}
            following
          </span>
          <span>
            <span className="text-white font-semibold">
              {user.public_repos}
            </span>{" "}
            repos
          </span>
        </div>

        <div className="flex gap-3 text-sm">
          {user.location && (
            <span className="text-gray-400">📍 {user.location}</span>
          )}
          {user.blog && (
            <a
              href={user.blog}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              🔗 Website
            </a>
          )}
          <a
            href={user.html_url}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
