import React from 'react';
import "./Factory.scss";

const Factory = () => {
    return (
        <section className="factoryContainer">
            <div className="factoryName">
                {/* adjustable name */}
                <h3>Name</h3>
            </div>
            <div className="factoryMinMax">
                {/* min and max drop down menu's */}
            </div>
            <div className="factoryFooter">
                {/* amount of numbers to generate */}
                {/* generate numbers button */}
            </div>
        </section>
    );
};

export default Factory;