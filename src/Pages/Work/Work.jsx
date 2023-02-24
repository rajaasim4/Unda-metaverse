import React from "react";
import { FaRocket } from "react-icons/all";
import Work_img from "../../assets/Images/Work_img.png";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import WorkData from "../../Data/WorkData";
import "./Work.css";
const Work = () => {
  return (
    <>
      <section className="Work">
        <NavBar />
        <div className="Work-gradient-bg"></div>
        <div className="Work-main">
          <div className="Work-hero">
            <div className="Work-left">
              <h2>
                Discover, collect, and <br /> sell extraordinary <br />
                <span>NFTs</span>
              </h2>
              <p>NFT is the world's first and largest NFT marketplace</p>
              <div className="Work-btn">
                <button>
                  <FaRocket />
                  Explore
                </button>
                <button>+ Create</button>
              </div>
            </div>
            <div className="Work-right">
              <img src={Work_img} alt="" />
            </div>
          </div>
          <div className="Work-details">
            <h1>How it Works</h1>
            <div className="Work-detials-main">
              {WorkData.map((Val) => {
                return <WorkDetialsCard {...Val} key={Val.id} />;
              })}
            </div>
          </div>
        </div>
        <h1>this is work</h1>
        <Footer />
      </section>
    </>
  );
};

const WorkDetialsCard = (props) => {
  const { details, heading, background, icon, id } = props;
  return (
    <div className="Work-detials-card" key={id}>
      <div className="Card-bg" style={{ background: background }}>
        <span aria-hidden="true">{icon}</span>
      </div>
      <h4>{heading}</h4>
      <p>{details}</p>
    </div>
  );
};
export default Work;
