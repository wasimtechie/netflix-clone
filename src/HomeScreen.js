import React from "react";
import Navbar from "./container/navbar/Navbar";
import Footer from "./container/footer/Footer";
import Banner from "./container/Banner/Banner";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default HomeScreen;
