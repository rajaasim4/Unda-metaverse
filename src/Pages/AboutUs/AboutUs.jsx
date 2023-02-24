import React, { useRef, useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar from "../../assets/Images/avatar1.png";
import avatar2 from "../../assets/Images/avatar3.png";
import avatar1 from "../../assets/Images/avatar4.png";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <NavBar />
      <section className="AboutUs">
        <div className="AboutUs-main">
          <div className="About-section1 About-section">
            <h2>About US</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae eaque ipsum, veritatis ipsam architecto nam molestiae
              accusantium placeat nihil tempora temporibus cumque. Illum ad
              ratione labore alias facere odit nulla quasi praesentium
              aspernatur. Exercitationem praesentium, nesciunt sit voluptatem
              beatae quasi dignissimos soluta eligendi deleniti quibusdam neque
              consequuntur. Culpa laudantium cumque quis aut optio totam,
              accusamus at! Sequi, blanditiis aliquid totam velit minus quis
              magnam, quidem non molestias aliquam dolor ex.
            </p>
          </div>
          <div className="About-section2 About-section">
            <h2>Meet Our Team</h2>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                speed: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <TeamCard imgsrc={avatar} name={"Nama Jabatan"} />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCard imgsrc={avatar1} name={"Mr.Brook"} />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCard imgsrc={avatar2} name={"James Hiton"} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const TeamCard = (props) => {
  return (
    <>
      <div className="About-team-card">
        <div className="About-tem-card-img">
          <img src={props.imgsrc} alt="" />
        </div>
        <h5>{props.name}</h5>
      </div>
    </>
  );
};
export default AboutUs;
