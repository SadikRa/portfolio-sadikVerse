/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import logoImage from "../../public/logo.png";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 md:flex md:items-center md:justify-between">
        {/* Left Side: Logo & Name */}
        <div className="flex items-center justify-center space-x-3 md:justify-start">
          <Image
            src={logoImage}
            alt="SadikVerse Logo"
            width={80}
            height={80}
            className="shadow-lg border-4 border-gray-200 dark:border-gray-700 rounded-full"
            priority
          />
          <span className="text-2xl font-bold text-[#2563EB] dark:text-[#3B82F6]">
            SadikVerse
          </span>
        </div>
        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium mt-6 md:mt-0">
          <a
            href="/"
            className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/projects"
            className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="/blog"
            className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors duration-300"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
        {/* Right Side: Social Icons */}
        <div className="flex justify-center gap-2 mt-6 md:mt-0">
          <a
            href="https://github.com/sadikverse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors duration-300"
          >
            <FaGithub className="text-black dark:text-white text-2xl md:text-3xl" />
          </a>
          <a
            href="https://linkedin.com/in/sadikverse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors duration-300"
          >
            <FaLinkedin className="text-black dark:text-white text-2xl md:text-3xl" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="hover:text-[#1877F2] transition-colors duration-300"
          >
            <FaFacebook className="text-black dark:text-white text-2xl md:text-3xl" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-[#E4405F] transition-colors duration-300"
          >
            <FaInstagram className="text-black dark:text-white text-2xl md:text-3xl" />
          </a>
        </div>
        
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 pb-4">
        &copy; {new Date().getFullYear()} SadikVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
