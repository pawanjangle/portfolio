import React from "react";
import GlassEffect from "./GlassEffect";
const frontend = {
  type: "Frontend",
  SkillsName: [
    "HTML",
    "CSS",
    "React js",
    "React Native",
    "Redux",
    "Bootstrap",
    "Materialize-css",
    "Material-Ui",
  ],
};
const backend = {
  type: "Backend",
  SkillsName: ["Node js", "Express js"],
};
const programmingLanguages = {
    type: "Programming Languages",
    SkillsName: ["JavaScript", "TypeScript"],
}
const database = {
  type: "Database",
  SkillsName: ["MongoDB"],
};
const hostingPlatforms = {
  type: "Hosting Platforms",
  SkillsName: ["Heroku", "AWS"],
};
const vcs = {
  type: "Version Control System",
  SkillsName: ["Git"],
};
const devops = {
  type: "Devops",
  SkillsName: ["Jenkins", "Docker"],
};
const Skills = () => {
  return (
    <div className="bg-white p-5 gradient container-fluid" >
      <h4 className="text-center text-dark font-weight-bold">Skills</h4>
      <div className="d-flex justify-content-around flex-wrap">
        <GlassEffect skillType={frontend} />
        <GlassEffect skillType={backend} />
        <GlassEffect skillType={programmingLanguages } />
        <GlassEffect skillType={database} />
        <GlassEffect skillType={hostingPlatforms} />      
        <GlassEffect skillType={vcs} />      
        <GlassEffect skillType={devops} />      
      </div>
    </div>
  );
};

export default Skills;
