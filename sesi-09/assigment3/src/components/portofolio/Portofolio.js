import React from "react";

const experienceContent = [
    {
        year: "2022",
        position: "Website Adhesi Store",
        compnayName: "Closed Source",
        details: `Online Shop Website.`,
    },
    {
        year: "2020",
        position: "LOKERIN",
        compnayName: "Closed Source",
        details: `Job information provider website
    jobs in Indonesia.`,
    },
    {
        year: "2021",
        position: "Peduli Tugas",
        compnayName: "Closed Source",
        details: `A web-based application that helps para
        students for task management.`,
    },
    {
        year: "2020",
        position: "Website PT. Someah Kreatif Nusantara",
        compnayName: "Closed Source",
        details: `Website Profile of PT. Creative Someah
        Archipelago of the year
        2020.`,
    },
    {
        year: "2020",
        position: "PAK-TENDIK",
        compnayName: "Closed Source",
        details: `Web-based application used by
        power
        Education (TENDIK) District
        Cianjur.`,
    },
    {
        year: "2020",
        position: "INKANAS Jawa Barat Exam",
        compnayName: "Closed Source",
        details: `Web-based application used by
        secretariat
        INKANAS West Java for
        processing all Karateka data
        West Java
        and manage Belt Ascension Exam data
        for
        athletes in all branches of INKANAS se
        West Java.`,
    },
    {
        year: "2020",
        position: "Ok-Boss",
        compnayName: "Closed Source",
        details: `Websites that are used by the public for
        cleaning business
        service.
        Websites that are used by the public for
        cleaning business
        service.`,
    },
];

const Porto = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i}>
                    <div className="icon">
                        <i className="fa fa-folder-open"></i>
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

export default Porto;
