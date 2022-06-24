import React from "react";
import bg from "../assets/videos/bg.mp4";
import { Link } from "react-router-dom";
import "./styles/LandingPage.css";

const LandingPage = () => {  
  return (
    <div>
        <h1>Pokemon APP JB</h1>
      <video autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <Link to="/home">
        <button className="btn">HOME</button>
      </Link>
    </div>
  );
};

export default LandingPage;
