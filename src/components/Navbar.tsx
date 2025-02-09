"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-extrabold text-primary"
        >
          SadikVerse
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-foreground font-medium">
          {["Home", "About", "Projects", "Contact", "Blog"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Mode Toggle and Login Button */}
        <div className="flex items-center space-x-4">
          <ModeToggle />

          <Link
            href="/login"
            className="hidden sm:inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300"
          >
            Login
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl text-primary focus:outline-none"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border shadow-md">
            <ul className="flex flex-col space-y-4 p-6 text-foreground font-medium">
              {["Home", "About", "Projects", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block hover:text-primary transition duration-300"
                    onClick={toggleMobileMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="block px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
