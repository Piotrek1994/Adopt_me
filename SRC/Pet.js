import React from "react";

const Pet = (props) => {
  console.log("ok");
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.bread}</h3>
    </div>
  );
};

export default Pet;
