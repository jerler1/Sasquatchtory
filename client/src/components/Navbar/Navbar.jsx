import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import api from "../../api/index";

const Navbar = () => {
  const [activeProfile, setActiveProfile] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [listOfProfiles, setListOfProfiles] = useState([]);

  useEffect(() => {
    api.getProfiles().then((res) => setListOfProfiles(res.data));
  }, []);

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
                <p>Choose Profile</p>
              </span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu">
            {listOfProfiles.map((profile) => {
              return (
                <div className="dropdown-content">
                  <p>{profile.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
