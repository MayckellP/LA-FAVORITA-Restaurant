import React from "react";

import imgLasagna from "../images/Lasagna.jpg";
import imgPizza from "../images/Pizza.jpg";
import imgTaco from "../images/Taco.jpg";

import "./styles/Carrousel.css";

const Carrousel = () => {
  return (
    <div className="cont-carrousel">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imgTaco} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgLasagna} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgPizza} className="d-block w-100" alt="..." />
          </div>
        </div>
        {/*<button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
  >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
  </button>*/}
      </div>
    </div>
  );
};

export default Carrousel;
