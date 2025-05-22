import SkillShowCase from "@/components/Home/Skills/SkillShowCase";
import Banner from "@/components/Home/Banner/Banner";
import React from "react";
import FeaturesProject from "@/components/Home/FeaturesProject/FeaturesProject";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePage = async () => {
  return (
    <div className="mt-16">
      <div>
        <Banner />
      </div>
      <div>
        <SkillShowCase />
      </div>
      <div className="my-24">
        <h1 className="text-2xl font-bold text-center my-6 text-gray-900 dark:text-white ">
          Features Project
        </h1>
        <FeaturesProject />
        <div className="text-center mt-14">
          <Link href="/project">
            <Button>See All Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
