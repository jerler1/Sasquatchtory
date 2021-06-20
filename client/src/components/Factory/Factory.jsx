import React from "react";
import "./Factory.scss";

const Factory = () => {
  return (
    <section className="factoryContainer">
      <div className="factoryWrapper">
        <div className="factoryName">
          <h4>Factory Name</h4>
          <h3>Fred</h3>
          <hr />
        </div>
        <div className="factoryMinMax">
          <div className="minContainer">
            <div className="header">
              <h4>Minimum Number</h4>
            </div>
          </div>
          <div className="maxContainer">
            <div className="header">
              <h4>Maximum Number</h4>
            </div>
          </div>
        </div>
        <div className="factoryFooter">
          {/* amount of numbers to generate */}
          {/* generate numbers button */}
        </div>
      </div>
    </section>
  );
};

export default Factory;
