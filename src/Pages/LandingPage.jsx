import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import Hero from "../Components/Hero/Hero";
import FeedbackForm from "../Components/FeedbackForm/FeedbackForm";
import Faqs from "../Components/FAQs/Faqs";
import Tagline from "../Components/TagLine/Tagline";

import FoodDrive from "../assets/landing/fooddrive.jpg";
import PlantationDrive from "../assets/landing/plantationdrive.jpeg";
import MainHeading from "../Components/mainHeading/MainHeading";
import HeroImage from "../Components/Hero/HeroImage";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <div className="container">
        <Hero />
        <Tagline />

        <Faqs />
        <FeedbackForm />
      </div>
    </>
  );
}
