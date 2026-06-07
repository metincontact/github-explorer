import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GitBranch } from "lucide-react";
import SearchBar from "../components/SearchBar";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!username.trim()) return;
    navigate(`/user/${username}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-violet-700/[0.12] blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[600px] h-[600px] rounded-full bg-indigo-700/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-fuchsia-900/[0.07] blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-xl gap-10">
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.06] text-violet-300/70 text-xs font-medium tracking-widest uppercase">
          <GitBranch className="w-3.5 h-3.5" />
          GitHub Explorer
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight bg-gradient-to-b from-white via-white/85 to-white/30 bg-clip-text text-transparent leading-[1.08] pb-1">
            Explore GitHub
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-sm mx-auto leading-relaxed">
            Search any developer profile, browse their repositories and discover open-source work.
          </p>
        </div>

        <SearchBar
          value={username}
          onChange={setUsername}
          onSearch={handleSearch}
        />

        <p className="text-slate-700 text-xs">
          Try searching{" "}
          <span className="text-slate-500 font-mono">torvalds</span>
          {" "}or{" "}
          <span className="text-slate-500 font-mono">gaearon</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
