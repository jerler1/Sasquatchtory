import React from "react";

const DropdownMenu = (props) => {

  return (
      <div className={props.value ? "dropdown is-active" : "dropdown"}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu2"
            onClick={props.handleDropDownClick}
          >
            <span>
              <p>{props.activeProfile.name ? "Active profile: " + props.activeProfile.name : "Choose Profile"}</p>
            </span>
          </button>
        </div>
        <div className="dropdown-menu">{props.children}</div>
      </div>
  );
};

export default DropdownMenu;
