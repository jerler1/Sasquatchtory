import React from "react";

const DropdownList = (profile) => {
  const { name, factory, _id } = profile.props;

  const handleClick = (event, name) => {
    console.log("Hi");
    console.log(name);
  }

  return (
    <div className="dropdown-content" onClick={handleClick}>
      <p>{name}</p>
    </div>
  );
};

export default DropdownList;
