import React from "react";

const DropdownList = (props) => {
  const { name, factory, _id } = props.profile;

  return (
    <div className="dropdown-content" onClick={props.handleClick}>
      <p>{name}</p>
    </div>
  );
};

export default DropdownList;
