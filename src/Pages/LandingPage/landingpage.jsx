import React from "react";
import SideMenu from "../../Components/SideMenu/sidemenu";
import Calender from "../../Components/Calender/calender";
import "./landingpage.scss";

function LandingPage() {
  return (
    <div className="landingPage">
      <SideMenu />
      <Calender />
    </div>
  );
}

export default LandingPage;
