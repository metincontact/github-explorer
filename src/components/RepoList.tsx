import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import type { GitHubRepo } from "../types";
import RepoCard from "./RepoCard";

type RepoListProps = {
  repos: GitHubRepo[];
};

function RepoList({ repos }: RepoListProps) {
  const [search, setSearch] = useState("");
  const [langFilter, setLangFilter] = useState("All");

  const languages = [
    "All",
    ...Array.from(
      new Set(repos.map((r) => r.language).filter(Boolean) as string[]),
    ),
  ];

  const filtered = repos.filter((repo) => {
    const matchSearch = repo.name.toLowerCase().includes(search.toLowerCase());
    const matchLang = langFilter === "All" || repo.language === langFilter;
    return matchSearch && matchLang;
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-600" />
          <input
            type="text"
            placeholder="Search repositories…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] text-sm text-white placeholder:text-slate-700 outline-none focus:border-violet-500/30 focus:bg-white/[0.04] transition-all duration-200"
          />
        </div>
        <div className="relative">
          <select
            value={langFilter}
            onChange={(e) => setLangFilter(e.target.value)}
            className="appearance-none w-full sm:w-auto pl-4 pr-9 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] text-sm text-slate-400 outline-none focus:border-violet-500/30 transition-all duration-200 cursor-pointer"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang} className="bg-[#0d1117] text-slate-200">
                {lang}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-600" />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-slate-700 text-sm">No repositories match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </>
  );
}

export default RepoList;
