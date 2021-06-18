import React from "react";

const DropdownMenu = () => {
  return (
    <>
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
          </button>
        </div>
        <div className="dropdown-menu">{props.children}</div>
      </div>
    </>
  );
};

export default DropdownMenu;
