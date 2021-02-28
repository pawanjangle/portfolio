import React from "react";

const GlassEffect = ({ skillType }) => {
  return (
    <div className="skills col-md-3 m-4 text-center">
      <div className="text-dark font-weight-bold">
        <h5 className="text-white">{skillType.type}</h5>
        {skillType.SkillsName.map((name, index) => {
          return (
            <div>
              <p key={index}>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlassEffect;
