import React from "react";
import LandingPage from "./LandingPage";
import MainSidebar from "./MainSidebar";
import MyTitleMessage from "./MyTitleMessage";
const Home = () => {
  return (
    <div className="" style={{ height: "100vh" }}>
      <LandingPage />
      <div className="d-flex flex-wrap">
        <MainSidebar />
        <MyTitleMessage />
      </div>
    </div>
  );
};

export default Home;
