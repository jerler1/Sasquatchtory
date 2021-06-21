import React from "react";
import "./Factory.scss";
import NumberDisplay from "../NumberDisplay/NumberDisplay";

const Factory = () => {
  return (
    <section className="factoryContainer">
      <div className="factoryWrapper">
        <div className="factoryName">
          <h4>Factory Name</h4>
          <h3>Fred</h3>
        </div>
        <hr />
        <div className="factoryMinMax">
          <div className="minContainer">
            <div className="header">
              <h4>Minimum Number</h4>
              <h3>10</h3>
            </div>
          </div>
          <div className="maxContainer">
            <div className="header">
              <h4>Maximum Number</h4>
              <h3>15</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="numberToGenerate">
            <h4>How many numbers to generate?</h4>
            <h3>6</h3>
        </div>
        <hr />
        <div className="factoryButtons">
            <button className="button is-primary-light">Edit All Fields</button>
            <button className="button is-danger" disabled>Save</button>
        </div>
        <hr />
        <div className="factoryGenerated">
          {/* amount of numbers to generate */}
          {/* generate numbers button */}
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
          <NumberDisplay></NumberDisplay>
        </div>
      </div>
    </section>
  );
};

export default Factory;
