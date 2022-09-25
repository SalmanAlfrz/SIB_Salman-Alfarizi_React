import React from "react";
import Skills from "../about/Skills";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const index = () => {
    return (
        <section className="main-content ">
            <div className="container">
                <div className="row">
                    <Skills />
                </div>
            </div>
        </section>
    );
};

export default index;