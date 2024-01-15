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
              "Our mission is to establish a centralized platform leveraging
              cutting-edge technologies and artificial intelligence to enhance
              the planning, execution, and transparency of community events. We
              are committed to providing a user-friendly experience that
              facilitates secure financial transactions, prioritizes impactful
              initiatives, and optimally matches volunteers with events. Through
              our platform, we aim to inspire collective action, making a
              lasting difference in environmental conservation, education, and
              addressing hunger-related challenges."
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
              "To create a socially impactful and sustainable community
              engagement platform that seamlessly connects passionate
              individuals, donors, and event organizers. Our vision is to
              empower communities through transparent and efficient management
              of plantation drives, education workshops, and hunger-related
              events, fostering a spirit of collaboration and positive change."
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
              "To be the go-to platform for individuals and organizations
              seeking to make a positive impact on society. By fostering a
              culture of collaboration, innovation, and transparency, we aim to
              be a driving force behind sustainable community development,
              leaving a lasting legacy for generations to come."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
