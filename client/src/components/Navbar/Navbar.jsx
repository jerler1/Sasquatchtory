import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import DropdownList from "../DropdownList/DropdownList";
import api from "../../api/index";

const Navbar = () => {
  const [activeProfile, setActiveProfile] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [listOfProfiles, setListOfProfiles] = useState([]);

  useEffect(() => {
    api.getProfiles().then((res) => setListOfProfiles(res.data));
  }, []);

  const handleClick = (event) => {
    console.log("Hi");
    console.log(event);
  }

  return (
    <nav className="navbarContainer">
      <div className="brand-logo">
        <Link to="/">
          <h4>Sasquatchtory</h4>
        </Link>
      </div>
      <div className="nav-links">
        <button className="newProfileButton button">
          <p>New Profile</p>
        </button>
        <div className={isDropdownActive ? "dropdown is-active" : "dropdown"}>
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu2"
              onClick={() => setIsDropdownActive(!isDropdownActive)}
            >
              <span>
                <p>{activeProfile ? activeProfile : "Choose Profile"}</p>
              </span>
              {/* <span className="icon is-small">
                <i class="fas fa-chevron-down"></i>
              </span> */}
            </button>
          </div>
          <div className="dropdown-menu">
            {listOfProfiles.map((profile) => {
              return (
                <DropdownList profile={profile} key={profile._id} handleClick={handleClick} />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
