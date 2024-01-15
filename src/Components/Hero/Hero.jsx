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
        <div className="hero1_">
          <div className="hero_text mt-4">
            "Nourishing Minds, Feeding Hope: Hunger Workshops for a Satiated
            Tomorrow."
          </div>
          <button className="button-17">Click me</button>
        </div>
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
        <div className="hero4_">
          <div className="hero_text">
            "Ignite Minds, Inspire Futures: Education Workshops Lighting the
            Path to Knowledge."
          </div>
          <button className="button-17">Click me</button>
        </div>
      </div>
      <div className="main_hero">
        <div className="hero1_">
          <div className="hero_text">
            "Harvesting Hope: Embrace the Plantation Drive Movement."
          </div>
          <button className="button-17">Click me</button>
        </div>
        <div className="hero2_">
          <img
            className="col-lg-4 col-md-5 col-sm-12 image_"
            src={PlantationDrive}
          />
        </div>
        {/* <button className="button-17">Click me</button> */}
      </div>
    </>
  );
}
