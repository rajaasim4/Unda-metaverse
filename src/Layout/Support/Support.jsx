import React from "react";
import { BiSupport, BsGithub } from "react-icons/all";
import "./Support.css";
const Support = () => {
  return (
    <section className="Support">
      <div className="Support-main">
        {/* <div className="Support-left"></div>
        <div className="Support-right"></div> */}
        <SupportCard
          title={"Meta Support"}
          para={
            " for self hosted user, we provide you priority & bug fix guarantee, so  can stop worrying"
          }
          btntitle={"Get a Quote"}
          icon={<BiSupport />}
        />
        <SupportCard
          title={"100% Open Source"}
          para={
            " Meta is infinitely extensible. Customize it,build upon  it, add your apps built with UNDA Framework"
          }
          btntitle={"Get a Quote"}
          icon={<BsGithub />}
        />
      </div>
    </section>
  );
};

const SupportCard = (props) => {
  return (
    <>
      <div className="SupportCard">
        <h2>{props.title}</h2>
        <p>{props.para}</p>
        <div className="SupportCard-details">
          <button>{props.btntitle}</button>
          <span>{props.icon}</span>
        </div>
      </div>
    </>
  );
};

export default Support;
