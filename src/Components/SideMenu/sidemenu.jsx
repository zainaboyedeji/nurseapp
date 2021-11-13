import React from "react";
import logo from "../../Images/ankora.png";
import avatar from "../../Images/avatar.png";
import search from "../../Images/search.png";
import plus from "../../Images/plus.png";
import calender from "../../Images/calender.png";
import people from "../../Images/people.png";
import setting from "../../Images/setting.png";
import "./sidemenu.scss";

function SideMenu() {
  return (
    <div className="sideMenu">
      <div className="menuLogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="quickActions">
      <div className="quickDiv">
        <p>Quick Actions</p>
        <div>
          <h6>
            <img src={search} alt="search" />
            Search Anything
          </h6>
        </div>
        <div>
          <h6>
            <img src={plus} alt="plus" />
            Add a New Patient
          </h6>
        </div>
      </div>

      <div className="quickDiv">
        <p>Manage</p>
        <div>
          <h6>
            <img src={calender} alt="calender" />
            Manage
          </h6>
        </div>
        <div>
          <h6>
            <img src={people} alt="people" /> Manage Patients
          </h6>
        </div>
        <div>
          <h6>
            <img src={setting} alt="setting" />
            Settings
          </h6>
        </div>
      </div>
      </div>
      <div className="profileDiv">
        <div className="profileImg">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="acmeClinic">
          <h6>Acme Clinic, Inc.</h6>
          <p>Marvin Tunji-ola</p>
          <h5>View Profile</h5>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
