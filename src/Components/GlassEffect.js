import React from "react";

const GlassEffect = ({ skillType }) => {
  return (
    <div className="skills col-md-3 m-4 text-center">
      <div className="text-dark font-weight-bold">
        <h5 className="text-dark font-weight-bold mb-4" style={{fontSize: "25px"}}><u>{skillType.type}</u></h5>
        {skillType.SkillsName.map((name, index) => {
          return (
            <div>
              <p key={index} className="aboutInfo font-weight-bold">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlassEffect;
