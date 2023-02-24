import React from "react";
import Footer from "../../Components/Footer/Footer";
import Comitment from "../../Layout/Commitment/Comitment";
import GetStarted from "../../Layout/GetStarted/GetStarted";
import Hero from "../../Layout/Hero/Hero";
import MadeByYou from "../../Layout/MadeByYou/MadeByYou";
import Services from "../../Layout/Services/Services";
import Support from "../../Layout/Support/Support";
const LandingPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Comitment />
      <MadeByYou />
      <GetStarted />
      <Support />
      <Footer />
    </>
  );
};

export default LandingPage;
