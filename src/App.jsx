import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Ring from "./components/ui/Ring";
import Footer from "./components/ui/footer";
import GithubProjects from "./components/GithubProjects";
import Squares from "./components/reactBits/Squares";

function App() {
  const [keyword, setKeyword] = useState("");
  function handleKeyword(value) {
    setKeyword(value);
  }
  return (
    <>
      <div className="fixed top-0 left-0  w-full h-full -z-10 overflow-hidden">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="down" // up, down, left, right, diagonal
          borderColor="#545456"
          hoverFillColor="#222"
        />
      </div>
      <section className="  min-h-screen  bg-zinc-950/90 border-x border-zinc-800 py-2 px-3 lg:pb-0  lg:pt-5 lg:px-5 flex flex-col  ">
        <main className="flex-1">
          <Navbar setKeyword={handleKeyword} />

          <div className="mt-10 mb-5 ">
            <Ring content={"My Repos.."} />
          </div>
          <GithubProjects keyword={keyword} username={"ranjan-builds"} />
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
