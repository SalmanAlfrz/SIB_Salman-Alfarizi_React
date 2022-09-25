import React from "react";

const educationContent = [
  {
    year: "2020 - 2024",
    degree: "Software Engineering",
    institute: "Universitas Pendidikan Indonesia"
  },
  {
    year: "2017 - 2020",
    degree: "Software Engineering",
    institute: "SMK Negeri 1 Cianjur"
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
