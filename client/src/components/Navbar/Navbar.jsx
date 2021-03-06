import React, { useEffect, useState, useContext } from "react";
import ProfileContext from "../../Context/ProfileContext";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import DropdownList from "../DropdownList/DropdownList";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import api from "../../api/index";

const Navbar = () => {
  // TODO: when a profile is made to add to listOfProfiles.
  const [listOfProfiles, setListOfProfiles] = useState([]);
  const {profile, setProfile} = useContext(ProfileContext);
  const [isProfileDropdownActive, setIsProfileDropdownActive] = useState(false);
  const [isNewProfileDropdownActive, setIsNewProfileDropdownActive] =
    useState(false);

  useEffect(() => {
    getListOfProfiles();
  }, []);

  const getListOfProfiles = () =>
    api.getProfiles().then((res) => setListOfProfiles(res.data));

  const handleProfileDropDownClick = () =>
    setIsProfileDropdownActive(!isProfileDropdownActive);

  const handleNewProfileDropdownClick = () =>
    setIsNewProfileDropdownActive(!isNewProfileDropdownActive);

  const handleDropdownListClick = (event) => {
    const choosenProfile = event.target.innerHTML;
    for (let i = 0; i < listOfProfiles.length; i++) {
      if (listOfProfiles[i].name === choosenProfile) {
        setProfile(listOfProfiles[i]);
        break;
      }
    }
    setIsProfileDropdownActive(false);
  };

  return (
    <nav className="navbarContainer">
      <div className="brand-logo">
        <Link to="/">
          <h4>Sasquatchtory</h4>
        </Link>
      </div>
      <div className="nav-links">
        <DropdownMenu
          buttonDisplay={<p>New Profile</p>}
          handleDropDownClick={handleNewProfileDropdownClick}
          value={isNewProfileDropdownActive}
        >
          {/* form goes here to add a new profile */}
          <div className="dropdown-content">
            <p>Should be displaying.</p>
          </div>
        </DropdownMenu>
        <DropdownMenu
          activeProfile={profile}
          value={isProfileDropdownActive}
          handleDropDownClick={handleProfileDropDownClick}
          buttonDisplay={
            <p>
              {profile?.name
                ? "Active profile: " + profile.name
                : "Choose Profile"}
            </p>
          }
        >
          {listOfProfiles.map((currentProfile) => {
            return (
              <DropdownList
                profile={currentProfile}
                key={currentProfile._id}
                handleClick={handleDropdownListClick}
              />
            );
          })}
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
