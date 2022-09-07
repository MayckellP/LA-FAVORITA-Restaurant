import React from "react";
import { NavLink } from "react-router-dom";

import Carrousel from "../components/Carrousel";
import Card from "../components/Card";
import Form from "../components/Form";

import "../pages/styles/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const HomePage = () => {
  return (
    <div className="body">
      <header className="cont-header">
        <div className="cont-text">
          <h1 className="title-hp">RESTAURANTE LA FAVORITA</h1>
          <p className="slogan">La mejor comida para cualquier gusto</p>
          <NavLink to="/reservation">
            <button type="button" className="btn btn-info" to="/reservation">
              RESERVE AHORA
            </button>
          </NavLink>
        </div>
        <div className="cont-carousel">
          <div className="subcont-carousel">
            <Carrousel />
          </div>
        </div>
      </header>
      <main className="cont-main">
        <article className="cont-card">
          <Card />
        </article>
      </main>
      <hr />
      <section className="cont-section">
        <div className="subcont-section">
          <h2 className="tl-oferta">Sugerencias y Ofertas de Trabajo</h2>
          <Form />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
