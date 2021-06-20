import React from "react";
import "./DropdownList.scss";

const DropdownList = (props) => {
    
  const { name } = props.profile;

  return (
    <div className="dropdown-content" onClick={props.handleClick}>
      <p>{name}</p>
    </div>
  );
};

export default DropdownList;
