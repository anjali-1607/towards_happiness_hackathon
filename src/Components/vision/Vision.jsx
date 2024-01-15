import React from "react";
import "./Vision.css";
import Mission from "../../assets/landing/ourmission.svg";
import Vission from "../../assets/landing/ourvision.svg";
import Longterm from "../../assets/landing/longterm.svg";

export default function Vision() {
  return (
    <>
      <div className="vision_grand">
        <div className="card p-4">
          <img className="card-img-top" src={Mission} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Our Mission</h5>
            <br></br>
            <br></br>
            <p className="card-text">
              Our mission: Tech-driven community event planning, user-friendly
              experiences, secure transactions, impactful volunteer matching.
              Inspiring collective action for lasting impact in conservation,
              education, and hunger.
            </p>
          </div>
        </div>
        <div className="card p-4">
          <img className="card-img-top" src={Vission} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Our Vision</h5>
            <br></br>
            <br></br>
            <p className="card-text">
              Building a platform connecting individuals, donors, and organizers
              for transparent and efficient community initiatives. Empowering
              through plantation, education, and hunger events. Fostering
              collaboration for positive change.
            </p>
          </div>
        </div>
        <div className="card p-4">
          <img className="card-img-top" src={Longterm} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Longterm</h5>
            <br></br>
            <br></br>
            <p className="card-text">
              Becoming the premier platform for positive societal impact through
              collaboration, innovation, and transparency. Driving sustainable
              community development for a lasting legacy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
