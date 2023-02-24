import React from "react";
import { GiVolleyballBall } from "react-icons/all";
import MadeByYou_img from "../../assets/Images/MadeByYou.png";
import "./MadeByYou.css";
const MadeByYou = () => {
  return (
    <section className="MadeByYou">
      <div className="MadeByYou-main">
        <div className="MadeByYou-left">
          <h2>
            Create the
            <span>world made</span>
            by you now
          </h2>
          <p>
            Kami mulai mengembangkan teknologi terbaru yang akan membantu
            orang-orang saling terhubung dan menjelajahi dunia mereka di
            metaverse.
          </p>
          <div className="MadeByYou-left-card">
            <MadeByYouCard>
              <span>
                Basis
                <br /> Website
              </span>
            </MadeByYouCard>
            <MadeByYouCard>
              <span>
                Virtual
                <br /> Reality
              </span>
            </MadeByYouCard>
            <MadeByYouCard>
              <span>
                Smart
                <br /> Devices
              </span>
            </MadeByYouCard>
          </div>
        </div>
        <div className="MadeByYou-right">
          <img src={MadeByYou_img} alt="" />
        </div>
      </div>
    </section>
  );
};

const MadeByYouCard = (props) => {
  return (
    <>
      <div className="MadeByYou-card">
        <div className="MadeByYou-card-icon">
          <GiVolleyballBall />
        </div>
        {props.children}
      </div>
    </>
  );
};
export default MadeByYou;
