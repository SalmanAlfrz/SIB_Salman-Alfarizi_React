import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Salman" },
  { meta: "last name", metaInfo: "Alfarizi" },
  { meta: "Age", metaInfo: "20 Years" },
  { meta: "Nationality", metaInfo: "Indonesia" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Jakarta" },
  { meta: "phone", metaInfo: "+6281910009635" },
  { meta: "Email", metaInfo: "salman.alfrz0112@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
