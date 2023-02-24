import React from "react";
import ServicesData from "../../Data/ServicesData";
import "./Service.css";
const Services = () => {
  return (
    <section className="Services">
      <div className="Services-main">
        <h2>
          Discover everything you <br /> can do in the
          <span> metaverse</span>
        </h2>
        <div className="Services-section">
          {ServicesData.map((val) => {
            return (
              <React.Fragment key={val.id}>
                <ServicesCard name={val.name} icon={val.icon} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServicesCard = (props) => {
  return (
    <>
      <div className="Services-card">
        <div className="Services-card-top">
          <div className="Services-card-img">{props.icon}</div>
          <span>{props.name}</span>
        </div>
      </div>
    </>
  );
};

export default Services;
