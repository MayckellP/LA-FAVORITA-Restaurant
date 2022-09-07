import React from "react";
import { NavLink } from "react-router-dom";

import "../components/styles/FormLog.css";

const FormLog = () => {
  return (
    <>
      <form className="form-log">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <div className="btns">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
          <NavLink to="/table">
            <button type="submit" className="btn btn-warning">
              Ver reservaciones sin cuenta
            </button>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default FormLog;
