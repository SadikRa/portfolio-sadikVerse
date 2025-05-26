/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
// import { useAppSelector } from "@/redux/hook";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};
const Navbar = ({ session }: { session: UserProps | null }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const dispatch = useAppDispatch();
  // const user = useAppSelector(selectCurrentUser);

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div>
            <img
              src="https://i.ibb.co.com/KjmMjyGx/logo.webp"
              alt="SadikVerse Logo"
              width={45}
              height={45}
              className="shadow-lg border-4 border-gray-200 dark:border-gray-700 rounded-full"
            />
          </div>
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-extrabold text-primary"
          >
            SadikVerse
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-foreground font-medium">
          <li>
            <Link href="/" className="hover:text-[#2563EB] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/project" className="hover:text-[#2563EB] transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-[#2563EB] transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#2563EB] transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-[#2563EB] transition">
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Right Side: Mode Toggle and Login/Logout Button */}
        <div className="flex items-center space-x-4">
          <ModeToggle />

          {session?.user ? (
            <Button
              onClick={() => signOut()}
              className="hidden sm:inline-block px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-300"
            >
              LogOut
            </Button>
          ) : (
            <Link
              href="/login"
              className="hidden sm:inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300"
            >
              Login
            </Link>
          )}

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
              <li>
                <Link href="/" className="hover:text-[#2563EB] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="hover:text-[#2563EB] transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#2563EB] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#2563EB] transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-[#2563EB] transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                {session?.user ? (
                  <Button
                    onClick={() => signOut()}
                    className="block px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-300"
                  >
                    LogOut
                  </Button>
                ) : (
                  <Link
                    href="/login"
                    className="block px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
