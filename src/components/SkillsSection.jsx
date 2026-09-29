import React from 'react';
import data from "../assets/data.json";
import SectionHeader from './SectionHeader';
import { resolveAssetUrl } from "../assets/assetUrls";

const SkillsSection = () => {
  const { skills } = data.data || { skills: [] };

  // Split the skills array into three rows: 7, 6, 7
  // const row1 = skills.slice(0, 7);
  // const row2 = skills.slice(7, 13);
  // const row3 = skills.slice(13, 20);
  // const remainingIcons = skills.slice(20);
  const row1 = skills.slice(0, 7);
  const row2 = skills.slice(7);

  const getSkillName = (path) => {
    const fileName = path.split("/").pop();
    return fileName.split(".")[0];
  };

  const SkillIcon = ({ skill, index }) => (
    <div key={`skill-${index}`} className="icons-row-wrapper">
      <div className="icons-row-group">
        <img
          src={resolveAssetUrl(skill)}
          alt={`Skill - ${getSkillName(skill)}`}
          className="icons-row-image"
        />
        <div className="icons-row-tooltip">
          <span className="icons-row-tooltip-hash">#</span>
          {getSkillName(skill)}
          <div className="icons-row-tooltip-arrow"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <SectionHeader
          title={"skills"}
          description={"Exploring Technologiessss"}
          linkText={""}
          link={""}
        />

        <div className="skills-rows">
          <div className="skills-row-between">
            {row1.map((skill, index) => (
              <SkillIcon skill={skill} index={index} key={index} />
            ))}
          </div>

          <div className="skills-row-around">
            {row2.map((skill, index) => (
              <SkillIcon skill={skill} index={index} key={index} />
            ))}
          </div>

          {/* <div className="skills-row-between" style={{ marginBottom: 0 }}>
            {row3.map((skill, index) => (
              <SkillIcon skill={skill} index={index} key={index} />
            ))}
          </div> */}

          {/* {remainingIcons.length > 0 && (
            <div className="skills-row-between" style={{ marginBottom: 0 }}>
              {remainingIcons.map((skill, index) => (
                <SkillIcon skill={skill} index={index} key={index} />
              ))}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
