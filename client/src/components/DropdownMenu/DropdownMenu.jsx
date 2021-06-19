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
              {props.buttonDisplay}
            </span>
          </button>
        </div>
        <div className="dropdown-menu">{props.children}</div>
      </div>
  );
};

export default DropdownMenu;
