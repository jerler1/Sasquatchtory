import React from 'react';
import "./Home.scss";

const Home = () => {
    return (
        <div className="homeContainer">
            <section className="rootNode">Root</section>
            <section className="factories">Factory</section>
            <section className="generatedNumbers"></section>            
        </div>
    );
};

export default Home;