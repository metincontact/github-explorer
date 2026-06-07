import { useEffect, useState } from "react";
import type { GitHubUser, GitHubRepo } from "../types";
import { githubHeaders } from "../lib/github";

type UseGitHubUserResult = {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  loading: boolean;
  error: string;
};

export function useGitHubUser(username: string | undefined): UseGitHubUserResult {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(!!username);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) return;

    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
          headers: githubHeaders,
        });
        if (!userRes.ok) throw new Error(`user:${userRes.status}`);
        const userData = await userRes.json();

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`,
          { headers: githubHeaders },
        );
        if (!repoRes.ok) throw new Error(`repos:${repoRes.status}`);
        const repoData = await repoRes.json();

        if (cancelled) return;
        setUser(userData);
        setRepos(repoData);
      } catch (err) {
        if (cancelled) return;
        const code = err instanceof Error ? err.message : "";
        if (code.endsWith(":403")) {
          setError("GitHub API rate limit exceeded. Try again later.");
        } else if (code === "user:404") {
          setError("User not found. Please try again.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => { cancelled = true; };
  }, [username]);

  return { user, repos, loading, error };
}
