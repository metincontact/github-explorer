import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useGitHubUser } from "../hooks/useGitHubUser";
import UserCard from "../components/UserCard";
import RepoList from "../components/RepoList";

function UserDetail() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user, repos, loading, error } = useGitHubUser(username);

  useEffect(() => {
    if (!username) navigate("/");
  }, [username, navigate]);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="relative w-9 h-9">
          <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
          <div className="absolute inset-0 rounded-full border border-t-violet-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
        <p className="text-slate-600 text-xs tracking-widest uppercase">Fetching profile</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="text-[22rem] font-black text-white/[0.015] select-none leading-none">!</span>
        </div>
        <div className="relative text-center space-y-2">
          <p className="text-white font-semibold">Couldn't load profile</p>
          <p className="text-slate-500 text-sm">{error}</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 text-sm transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to search
        </button>
      </div>
    );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-violet-800/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-indigo-800/[0.05] blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-slate-600 hover:text-slate-300 mb-10 text-sm transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back
        </button>

        {user && <UserCard user={user} />}

        <div className="flex items-center gap-4 mt-10 mb-5">
          <h2 className="text-white font-semibold text-base">Repositories</h2>
          <div className="flex-1 h-px bg-white/[0.05]" />
          <span className="text-slate-700 text-xs tabular-nums">{repos.length}</span>
        </div>

        <RepoList repos={repos} />
      </div>
    </div>
  );
}

export default UserDetail;
