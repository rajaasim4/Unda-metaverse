import React from "react";
import { BsPlayCircle, IoMdArrowForward } from "react-icons/all";
import Hero_img from "../../assets/Images/Hero.png";
import NavBar from "../../Components/NavBar/NavBar";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <header className="Hero">
        <NavBar />
        <div className="Hero-main">
          <div className="Hero-left">
            <h1>
              Let’s explore
              <br />
              your own
              <span> metaverse</span>
              <br />
              world.
            </h1>
            <p>
              Ruang 3D di metaverse untuk bersosialisasi, belajar, kolaborasi,
              dan bermain melampaui apa yang bisa kita bayangkan. The Metaverse
              is the next evolution of social connection.
            </p>
            <div className="Hero-btn">
              <button>Explore Now</button>
              <button>
                <BsPlayCircle />
                Learn More
                <IoMdArrowForward />
              </button>
            </div>
          </div>
          <div className="Hero-right">
            <img src={Hero_img} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Hero;
