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
    <div className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition-colors"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
