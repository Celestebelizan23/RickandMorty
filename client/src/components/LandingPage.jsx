import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css";

export default function LandingPage() {
  return (
    <div id="LandingPage">
      <h1 id="LandingH1">Bienvenidos </h1>
      <Link to="./Home">
        <button id="LandingButton">Ingresar</button>
      </Link>
    </div>
  );
}
