import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/ui/Card";
import Modal from "./components/Modal";
import Ring from "./components/ui/Ring";
import Footer from "./components/ui/footer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <>
      <section className="  ml-1 mr-1 -z-4 lg:ml-10 lg:mr-10 min-h-screen  bg-slate-950/90 border-x border-gray-800 py-2 px-3 lg:pb-0  lg:pt-5 lg:px-5 flex flex-col  ">
        <main className="flex-1">
          <Navbar onOpenModal={() => setIsModalOpen(true)} />
          <Ring
            content={
              " A collection of recent web development projects Ranjan/Builds"
            }
          />

          <CardList key={refreshKey} />
        </main>
        <Footer />
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitted={() => setRefreshKey((prev) => prev + 1)}
      >
        <h2 className="text-xl font-bold mb-4">Add New Project</h2>
        <form className="flex flex-col gap-3">
          <input
            placeholder="Project Name"
            className="p-2 rounded bg-slate-800 border border-gray-700 focus:outline-none"
          />
          <textarea
            placeholder="Description"
            className="p-2 rounded bg-slate-800 border border-gray-700 focus:outline-none"
          />
          <input
            placeholder="Technologies (comma separated)"
            className="p-2 rounded bg-slate-800 border border-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 rounded p-2 mt-2"
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
}

export default App;
