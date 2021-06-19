import React, { useState } from "react";

const DropdownMenu = (props) => {

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
      <div className={isDropdownActive ? "dropdown is-active" : "dropdown"}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu2"
            onClick={() => setIsDropdownActive(!isDropdownActive)}
          >
            <span>
              <p>{props.activeProfile ? props.activeProfile : "Choose Profile"}</p>
            </span>
          </button>
        </div>
        <div className="dropdown-menu">{props.children}</div>
      </div>
  );
};

export default DropdownMenu;
