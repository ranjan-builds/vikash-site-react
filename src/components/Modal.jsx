// components/ui/Modal.jsx
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose, onSubmitted }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [tech, setTech] = useState("");
  const [repo, setRepo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Description", desc);
      formData.append("Technology", tech);
      formData.append("Repo", repo);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwXCL8C87kYlZvXcmsZZYCnZvUeTw_whHSDn9ZJt-4TaAQ4h-RCDRraAkSnY_ZD94Xo/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Reset form
        setName("");
        setDesc("");
        setTech("");
        setRepo("");

        // Notify parent that a new project was added
        onSubmitted();

        // Close modal
        onClose();
      } else {
        console.error("Failed to submit ❌");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xs z-50">
      <div className="bg-slate-900/80 border border-slate-700 text-white p-6 rounded-md shadow-lg relative w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Project</h2>
          <button onClick={onClose}>
            <IoCloseCircleOutline
              size={24}
              className="text-gray-400 hover:text-gray-200"
            />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded bg-slate-800 border border-gray-700 focus:outline-none"
            required
          />
          <textarea
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="p-2 rounded bg-slate-800 border border-gray-700 focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="p-2 rounded bg-slate-800 border border-gray-700 focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Repository Name"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className="p-2 rounded bg-slate-800 border border-gray-700 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer px-8 py-2 mt-2 rounded-md bg-linear-to-r from-blue-900/50 to-blue-800/50 relative  text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
          >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">
              {" "}
              {loading ? "Submitting..." : "Submit"}
            </span>
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Modal;
