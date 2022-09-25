import React from "react";
import Porto from "./Portofolio";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
          </div>
          <div className="col-lg-12 m-15px-tb">
            <div className="resume-box">
              <Porto />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;