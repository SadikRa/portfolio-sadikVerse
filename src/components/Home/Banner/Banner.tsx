/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import profileImage from "../../../../public/profile.jpg";
import { Button } from "@/components/ui/button";

const words = ["Full Stack Developer", "React & Next.js Expert", "MERN Stack"];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left max-w-lg md:max-w-xl lg:max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
          Hi, I'm Sadik Rahman! 🚀
        </h1>

        <motion.h2
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-gray-600 dark:text-white sm:text-3xl lg:text-4xl font-medium  mt-2"
        >
          {words[index]}
        </motion.h2>

        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mt-4">
          Passionate about building <strong>scalable</strong> and{" "}
          <strong>high-performance web applications</strong> using modern
          technologies.
        </p>

        <a href="https://drive.google.com/file/d/1rdVEQ8hhTBO-ilutDYLVDMLknMFHVdSn/view?usp=sharing">
          <Button
            className="mt-6 px-6 py-5 text-lg font-semibold bg-primary
            text-primary-foreground hover:bg-primary/90 rounded-lg
            transition-transform transform hover:scale-105"
          >
            Download Resume
          </Button>
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-8 md:mt-0 md:ml-12 lg:ml-16"
      >
        <Image
          src={profileImage}
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full mr-0 md:mr-10 lg:mr-14 shadow-lg border-4 border-primary"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
