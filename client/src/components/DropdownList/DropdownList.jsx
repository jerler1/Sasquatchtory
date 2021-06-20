import React from "react";

const DropdownList = (props) => {
    
  const { name } = props.profile;

  return (
    <div className="dropdown-content" onClick={props.handleClick} data-profile={props.profile ? props.profile : ""}>
      <p>{name}</p>
    </div>
  );
};

export default DropdownList;
