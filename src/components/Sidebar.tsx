"use client";

import { useState } from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaNewspaper,
  FaPlus,
  
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`h-screen ${
          isOpen ? "w-64" : "w-20"
        } bg-blue-600 dark:bg-gray-800 text-white transition-all duration-300 p-4 fixed shadow-lg`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white mb-4 focus:outline-none"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Sidebar Items */}
        <nav className="flex flex-col space-y-4">
          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            {isOpen && <span>Theme</span>}
          </div>

          {/* Home */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
          >
            <FaHome size={20} />
            {isOpen && <span>Home</span>}
          </Link>

          {/* Projects Dropdown */}
          <div>
            <button
              onClick={() => setIsProjectOpen(!isProjectOpen)}
              className="flex items-center space-x-2 hover:text-gray-300 w-full transition-colors"
            >
              <FaProjectDiagram size={20} />
              {isOpen && (
                <>
                  <span>Projects</span>
                  {isProjectOpen ? (
                    <FaChevronUp size={16} />
                  ) : (
                    <FaChevronDown size={16} />
                  )}
                </>
              )}
            </button>
            {isProjectOpen && isOpen && (
              <div className="pl-6 mt-2 space-y-2">
                <Link
                  href="/dashboard/projects"
                  className="block hover:text-gray-300"
                >
                  <FaNewspaper className="inline-block mr-2" /> All Projects
                </Link>
                <Link
                  href="/dashboard/projects/create"
                  className="block hover:text-gray-300"
                >
                  <FaPlus className="inline-block mr-2" /> Create Project
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div>
            <button
              onClick={() => setIsBlogOpen(!isBlogOpen)}
              className="flex items-center space-x-2 hover:text-gray-300 w-full transition-colors"
            >
              <FaNewspaper size={20} />
              {isOpen && (
                <>
                  <span>Blogs</span>
                  {isBlogOpen ? (
                    <FaChevronUp size={16} />
                  ) : (
                    <FaChevronDown size={16} />
                  )}
                </>
              )}
            </button>
            {isBlogOpen && isOpen && (
              <div className="pl-6 mt-2 space-y-2">
                <Link
                  href="/dashboard/blogs"
                  className="block hover:text-gray-300"
                >
                  <FaNewspaper className="inline-block mr-2" /> All Blogs
                </Link>
                <Link
                  href="/dashboard/blogs/create"
                  className="block hover:text-gray-300"
                >
                  <FaPlus className="inline-block mr-2" /> Create Blog
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main
        className={`flex-1 min-h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300 ml-${
          isOpen ? "64" : "20"
        }`}
      ></main>
    </div>
  );
};

export default Sidebar;
