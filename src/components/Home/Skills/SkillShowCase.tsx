"use client"; // Required for Next.js app router if using animations

import { Progress } from "@/components/ui/progress"; // Ensure Progress is correctly exported
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiEslint,
  SiMongoose,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 80 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 75 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 85 },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 80 },
  { name: "Vite", icon: <SiVite className="text-purple-500" />, level: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 90 },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" />, level: 80 },
  { name: "Ant Design", icon: <SiAntdesign className="text-red-500" />, level: 70 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 75 },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-white" />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 75 },
  { name: "Mongoose", icon: <SiMongoose className="text-red-500" />, level: 70 },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" />, level: 85 },
  { name: "ESLint", icon: <SiEslint className="text-purple-500" />, level: 70 },
];

const SkillShowCase = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-white">
              My Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <span className="text-2xl">{skill.icon}</span>
                  <div className="w-full">
                    <div className="flex justify-between text-sm font-medium text-gray-800 dark:text-gray-200">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SkillShowCase;
