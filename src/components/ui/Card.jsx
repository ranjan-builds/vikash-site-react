import React, { useEffect, useState } from "react";
import SpotlightCard from "../reactBits/SpotlightCard";
import { GoLinkExternal } from "react-icons/go";
import ShinyText from "../reactBits/ShinyText";

const Card = ({ name, description, repo, technology }) => {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="#393BB2"
    >
      <a
        href={`https://ranjan-builds.github.io/${repo}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoLinkExternal className="text-gray-400 hover:text-white mb-2" />
      </a>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-300 mb-3">{description}</p>
      <p className="text-sm flex gap-1 flex-wrap text-gray-400 mb-3">
        {technology.split(",").map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium bg-gray-800 text-blue-400 rounded-full"
          >
            {tech.trim()}
          </span>
        ))}
      </p>
    </SpotlightCard>
  );
};

const CardList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // start loading
    fetch(
      "https://script.google.com/macros/s/AKfycbwXCL8C87kYlZvXcmsZZYCnZvUeTw_whHSDn9ZJt-4TaAQ4h-RCDRraAkSnY_ZD94Xo/exec"
    )
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false)); // stop loader
  }, []);

  if (loading) {
    return (
 <div className="w-full h-[80vh] flex justify-center items-center py-20">
 
<ShinyText 
  text="Loading Projects..." 
  disabled={false} 
  speed={3} 
  className='custom-class' 
/>

</div>


    );
  }

  if (data.length === 0) {
    return (
      <p className="text-gray-400 text-center py-10">
        No projects found. Add some!
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[...data].reverse().map((item, index) => (
        <Card
          key={index}
          name={item.Name}
          description={item.Description}
          repo={item.Repo}
          technology={item.Technology}
        />
      ))}
    </div>
  );
};

export default CardList;
