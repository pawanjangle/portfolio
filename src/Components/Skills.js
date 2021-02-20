import React from "react";
import GlassEffect from "./GlassEffect";
const frontend = {
  type: "Frontend",
  SkillsName: [
    "HTML",
    "CSS",
    "Javascript",
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
const database = {
  type: "Database",
  SkillsName: ["MongoDB"],
};
const vcs = {
  type: "Version Control System",
  SkillsName: ["Git"],
};
const Skills = () => {
  return (
    <div className="bg-white p-5 gradient">
      <h4 className="text-center">Skills</h4>
      <div className="d-flex justify-content-around flex-wrap">
        <GlassEffect skillType={frontend} />
        <GlassEffect skillType={backend} />
        <GlassEffect skillType={database} />
        <GlassEffect skillType={vcs} />
      </div>
    </div>
  );
};

export default Skills;
