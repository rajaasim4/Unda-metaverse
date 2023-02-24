import React, { useState } from "react";
import {
  FaCubes,
  FaVolleyballBall,
  FiArrowDown,
  MdMapsHomeWork,
} from "react-icons/all";
import Comitment_img from "../../assets/Images/Commitment.png";
import "./Comitment.css";
const Comitment = () => {
  return (
    <section className="Comitment">
      <div className="Comitment-main">
        <div className="Comitment-left">
          <img src={Comitment_img} alt="" />
        </div>
        <div className="Comitment-right">
          <h2>
            Commitment us in
            <span> Development</span>
          </h2>
          <p>
            Vole, any of numerous species of small-bodied mouselike rodents of
            the Northern Hemisphere that are classified, along with lemmings, in
            the subfamily Arvicolinae of the family Cricetidae.
          </p>
          <div className="Comitment-faq">
            <CommitmentFaq
              icon={<FaVolleyballBall />}
              title={"Immersive Learning System"}
            />
            <CommitmentFaq
              icon={<MdMapsHomeWork />}
              title={"Responsible Research"}
            />
            <CommitmentFaq
              icon={<FaCubes />}
              title={"Responsible Innovation"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CommitmentFaq = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={show ? "Faq Faq-show" : "Faq"}>
        <div className="Faq-top">
          <div className="Faq-left">
            <div className="Faq-icon">
              <span>{props.icon}</span>
            </div>
            <span>{props.title}</span>
          </div>
          <div className="Faq-right">
            <FiArrowDown
              className={show ? "Faq-arrow Faq-arrow-rotate" : "Faq-arrow"}
              onClick={() => {
                setShow(!show);
              }}
            />
          </div>
        </div>
        <div className={show ? "Faq-content-show" : "Faq-content"}>
          <p>
            We are responsible for building experiences using the metaverse
            using immersive technology, we work closely with universities and
            scientific research.
          </p>
        </div>
      </div>
    </>
  );
};

export default Comitment;
