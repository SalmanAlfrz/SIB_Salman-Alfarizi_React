import React from "react";

const experienceContent = [
  {
    year: "2019",
    position: "Web Developer",
    compnayName: "PT. Someah Kreatif Nusantara",
    details: `Fixing a Web Application that
    used Province level, remake
    Website of the company, and
    developing IoT technology ignites
    lamp with
    smartphones.`,
  },
  {
    year: "2021",
    position: "Web Developer",
    compnayName: "Universitas Pendidikan Indonesia",
    details: `Developing a Quality Audit Web Application
    Internal used by the Study Program
    Software Engineering at University
    Indonesian Education for 2021.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
