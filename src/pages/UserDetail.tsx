import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { GitHubUser, GitHubRepo } from "../types";
import UserCard from "../components/UserCard";
import RepoCard from "../components/RepoCard";

function UserDetail() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("User not found");
        const userData = await userRes.json();

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=6`,
        );
        const repoData = await repoRes.json();

        setUser(userData);
        setRepos(repoData);
      } catch {
        setError("User not found. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400">Searching GitHub...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-5xl">😕</p>
        <p className="text-red-400 text-lg">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Go back
        </button>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate("/")}
        className="text-gray-400 hover:text-white mb-6 inline-block transition-colors"
      >
        ← Back
      </button>

      {user && <UserCard user={user} />}

      <h2 className="text-white font-bold text-xl mb-4 mt-8">
        Top Repositories
      </h2>

      {repos.length === 0 ? (
        <p className="text-gray-500">No public repositories found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDetail;
