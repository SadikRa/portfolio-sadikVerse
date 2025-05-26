"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiShadcnui,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    website: "https://www.typescriptlang.org/",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    website: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    website: "https://nextjs.org/",
  },
  {
    name: "Vite",
    icon: <SiVite className="text-purple-500" />,
    website: "https://vitejs.dev/",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    website: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-indigo-500" />,
    website: "https://getbootstrap.com/",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign className="text-red-500" />,
    website: "https://ant.design/",
  },
  {
    name: "Shadcn/ui",
    icon: <SiShadcnui className="text-blue-500" />,
    website: "https://ui.shadcn.com/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    website: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 dark:text-white" />,
    website: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    website: "https://www.mongodb.com/",
  },
  {
    name: "Mongoose",
    icon: <SiMongoose className="text-red-500" />,
    website: "https://mongoosejs.com/",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600" />,
    website: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-black dark:text-white" />,
    website: "https://github.com/",
  },
  {
    name: "ESLint",
    icon: <SiEslint className="text-purple-500" />,
    website: "https://eslint.org/",
  },
  {
    name: "SQL",
    icon: <SiMysql className="text-blue-600" />,
    website: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-800" />,
    website: "https://www.postgresql.org/",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-gray-900 dark:text-white" />,
    website: "https://www.prisma.io/",
  },
];

const SkillShowCase = () => {
  return (
    <div className="w-full mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className=" border-none rounded-none shadow-none ">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800 dark:text-white">
              My Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.a
                  key={index}
                  href={skill.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl hover:scale-105 transition-transform duration-200">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                      {skill.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SkillShowCase;
