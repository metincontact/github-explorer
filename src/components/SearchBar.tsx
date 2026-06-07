import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="flex items-center w-full gap-2 p-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl focus-within:border-violet-500/30 focus-within:bg-white/[0.05] transition-all duration-300">
      <Search className="ml-2 w-4 h-4 text-slate-600 shrink-0" />
      <input
        type="text"
        placeholder="Enter a GitHub username…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent text-white placeholder:text-slate-600 outline-none text-sm py-1.5"
      />
      <button
        onClick={onSearch}
        className="shrink-0 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
