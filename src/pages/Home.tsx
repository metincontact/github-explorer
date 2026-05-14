import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!username.trim()) return;
    navigate(`/user/${username}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white mb-2">GitHub Explorer</h1>
      <p className="text-gray-400 mb-8">Search any GitHub profile</p>
      <SearchBar
        value={username}
        onChange={setUsername}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default Home;
