import React from "react";

const GlassEffect = ({ skillType} ) => {
  return (
    <div className="skills col-md-4 m-4 text-center">
      <div className="text-white">      
        <h5>{skillType.type}</h5>
      {skillType.SkillsName.map((name, index)=>{
          return(
              <>
              <p key={index}>{name}</p>
              </>
          )
      })}
      </div>
    </div>
  );
};

export default GlassEffect;
