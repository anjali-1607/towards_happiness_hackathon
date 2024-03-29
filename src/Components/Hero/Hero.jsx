import React from "react";
import "./Hero.css";
import FoodDrive from "../../assets/landing/fooddrive.jpg";
import PlantationDrive from "../../assets/landing/plantationdrive.jpeg";
import EducationDrive from "../../assets/landing/educationdrive.jpg";
import HeroImg from "../../assets/landing/hero-img.jpg";

export default function hero() {
  return (
    <>
      <div className="main_hero mt-4">
        <div className="hero1_">
          <div className="fnt-heading">
            Food Drives
          </div>
          <div className="hero_text fnt-description ">
          Welcome to our Educational Workshops! 🚀 Explore engaging learning experiences where knowledge meets fun. Our workshops bring experts and learners together, fostering a dynamic environment of skill-building and discovery. Join us as we share insights, provide hands-on activities, and create a space where education becomes an exciting journey.
            <br></br>
            <br></br>
            <button className="button-17">Know More</button>
          </div>
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
        <div className="fnt-heading">
            Educational workshop
          </div>
          <div className="hero_text fnt-description">
          Welcome to our Food Drive! 🌽🥫 Join us in the spirit of giving. Our food drives bring communities together to combat hunger. Through donations, volunteers, and partnerships, we collect and distribute essential food items to those in need. Let's make a difference – because when we share, we care. Join our food drive and be a part of a movement that nourishes hearts and homes!
            <br></br>
            <br></br>
            <button className="button-17">Know More</button>
          </div>
        </div>
      </div>
      <div className="main_hero">
        <div className="hero1_">
        <div className="fnt-heading">
            Plantation Drive
          </div>
          <div className="hero_text fnt-description">
          Welcome to our Plantation Drive! 🌱 Embrace the green revolution with us. Our plantation drives are a collective effort to make our environment healthier and happier. Join hands with volunteers, local communities, and nature enthusiasts as we plant trees, beautify spaces, and create a greener world.
            <br></br>
            <br></br>
            <button className="button-17">Know More</button>
          </div>
        </div>
        <div className="hero2_">
          <img
            className="col-lg-4 col-md-5 col-sm-12 image_"
            src={PlantationDrive}
          />
        </div>
        {/* <button className="button-17">Know More</button> */}
      </div>
    </>
  );
}
