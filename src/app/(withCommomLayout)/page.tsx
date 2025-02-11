import SkillShowCase from "@/components/Home/Skills/SkillShowCase";
import Banner from "@/components/Home/Banner/Banner";
import React from "react";

const HomePage = async () => {
  return (
    <div className="mt-16">
      <div>
        <Banner />
      </div>
      <div>
        <SkillShowCase />
      </div>
    </div>
  );
};
export default HomePage;
