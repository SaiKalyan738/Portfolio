import React from 'react';

const Skills = () => {
  return (
    <section id='skills'>
      <div className="skills_section">
        <div className="skills_head">
          <h2>MY SKILLS</h2>
        </div>

        <div className="skills_main">
          <div className="skills_column">
            {renderSkill("HTML", "90%")}
            {renderSkill("CSS", "85%")}
            {renderSkill("JavaScript", "70%")}
            {renderSkill("React JS", "65%")}
          </div>
          <div className="skills_column">
            {renderSkill("C", "65%")}
            {renderSkill("Python", "65%")}
            {renderSkill("Java", "75%")}
            {renderSkill("MySQL", "60%")}
          </div>
        </div>
      </div>
    </section>
  );
};

const renderSkill = (skillName, percentage) => {
  return (
    <div className="skill_bar" key={skillName}>
      <div className="info">
        <p>{skillName}</p>
        <p>{percentage}</p>
      </div>
      <div className="bar">
        <span className={skillName.toLowerCase().replace(/\s+/g, '')} style={{ width: percentage }}></span>
      </div>
    </div>
  );
};

export default Skills;
