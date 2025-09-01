import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SpotlightCard from "./reactBits/SpotlightCard";
import ShinyText from "./reactBits/ShinyText";

const GithubProjects = ({ username, keyword }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading)
    return (
      <div className="w-full h-[50vh] flex justify-center items-center py-20">
        <ShinyText
          text="Loading Projects..."
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>
    );

  const filteredData = repos.filter((item) => {
    if (!keyword) return true; // show all if keyword empty
    const search = keyword.toLowerCase();
    return (
      item.name?.toLowerCase().includes(search) ||
      item.description?.toLowerCase().includes(search) ||
      item.language?.toLowerCase().includes(search)
    );
  });

  if (filteredData.length === 0) {
    return (
      <p className="text-gray-400 text-center py-10">
        No projects found matching "{keyword}"
      </p>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...filteredData].reverse().map((repo) => (
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="#393BB2"
          key={repo.id}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg text-white truncate">
              {repo.name}
            </h2>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FiGithub size={20} />
            </a>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 line-clamp-2 mb-4">
            {repo.description || "No description provided."}
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span className="px-1.5 bg-blue-950/60 text-blue-400 rounded-full py-0.5" >{repo.language || "Unknown"}</span>
            <a
              href={`https://ranjan-builds.github.io/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:underline"
            >
              <FiExternalLink size={14} /> Live
            </a>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default GithubProjects;
