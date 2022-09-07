import React from "react";
import imgService from "../images/5-estrellas.png";
import imgSalud from "../images/salud.png";
//import imgRating from "../images/top-10.png";
import imgEnvio from "../images/courier.png";

const Card = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-6">
        <div className="col">
          <div className="card h-100">
            <img src={imgService} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Servicio y atención de primera </h5>
              <p className="card-text">
                Contamos con profecionales altamente experimentados en la rama.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={imgSalud} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Certificados de Salubridad actualizados
              </h5>
              <p className="card-text">
                Desde normativas ISO hasta Salubridad de la municipalidad.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card h-100">
            <img src={imgEnvio} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Envío a todo el país</h5>
              <p className="card-text">
                Sin moverte desde casa te enviamos lo que nos solicites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
