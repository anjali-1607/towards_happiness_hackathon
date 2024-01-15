import React from "react";
import "./Hero.css";
import FoodDrive from "../../assets/landing/fooddrive.jpg";
import PlantationDrive from "../../assets/landing/plantationdrive.jpeg";
import EducationDrive from "../../assets/landing/educationdrive.jpg";
import HeroImg from "../../assets/landing/hero-img.jpg";

export default function hero() {
  return (
    <>
      <div className="main_hero">
        <div className="hero1_"></div>
        <div className="hero2_">
          <img className="col-lg-4 col-md-5 col-sm-12 image_" src={FoodDrive} />
        </div>
      </div>
      <div className="main_hero">
        <div className="hero2_">
          <img
            className="col-lg-4 col-md-5 col-sm-12 image_"
            src={EducationDrive}
          />
        </div>
        <div className="hero1_"></div>
      </div>
      <div className="main_hero">
        <div className="hero1_"></div>
        <div className="hero2_">
          <img
            className="col-lg-4 col-md-5 col-sm-12 image_"
            src={PlantationDrive}
          />
        </div>
      </div>
    </>
  );
}
