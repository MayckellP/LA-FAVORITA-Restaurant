import React from "react";
import { NavLink } from "react-router-dom";

const Form = () => {
  const alertaSesion = () => {
    alert("Debes iniciar sesión primero");
  };

  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            E-mail:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Comentario:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
      </div>
      <NavLink to="/login">
        <button
          type="button"
          className="btn btn-info w-100"
          onClick={alertaSesion}
        >
          ENVIAR SOLICITUD
        </button>
      </NavLink>
    </>
  );
};

export default Form;
