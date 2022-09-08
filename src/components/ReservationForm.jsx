import React, { useState } from "react";
import { database } from "../firebase/firebase";
import {
  collection,
  //getDocs,
  addDoc,
  //deleteDoc,
  //updateDoc,
  //doc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";

import "./styles/ReservationForm.css";

const formularioInicializado = {
  nombre: "",
  cantidad: 1,
  telf: 0,
  correo: "",
  fecha: "",
  hora: "",
  descripcion: "",
};

const ReservationForm = () => {
  const [form, setForm] = useState(formularioInicializado);

  //HACER LA RESERVACIÓN
  const registrarReserva = async () => {
    const collectionReserva = collection(database, "reservaciones");
    await addDoc(collectionReserva, form);
    console.log(form);
    alert(
      "Reserva realizada correctamente. Inicia Sesión para revisarla o da clic en 'Ver reservaciones sin cuenta'"
    );
  };

  return (
    <>
      <h1 className="title">Reservación en Línea</h1>
      <form className="cont-form">
        <table className="cont-table">
          <tbody>
            <tr>
              <td className="campo-form">
                <div className="mb-3">
                  <label htmlFor="nombrePelicula" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombrePelicula"
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        nombre: e.target.value,
                      })
                    }
                  />
                </div>
              </td>

              <td className="campo-form">
                <div className="mb-3">
                  <label htmlFor="numCliente" className="form-label">
                    N° de Personas
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numCliente"
                    value={form.cantidad}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        cantidad: e.target.value,
                      })
                    }
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="campo-form">
                <div className="mb-3">
                  <label htmlFor="telfCliente" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telfCliente"
                    value={form.telf}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        telf: e.target.value,
                      })
                    }
                  />
                </div>
              </td>

              <td className="campo-form">
                <div className="mb-3">
                  <label htmlFor="mailCliente" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="mailCliente"
                    value={form.correo}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        correo: e.target.value,
                      })
                    }
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="campo-form">
                <div className="mb-3">
                  <label htmlFor="dateCliente" className="form-label">
                    Fecha
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateCliente"
                    value={form.fecha}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        fecha: e.target.value,
                      })
                    }
                  />
                </div>
              </td>

              <td className="campo-form">
                <div className="mb-3">
                  <label htmlFor="horaCliente" className="form-label">
                    Hora
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="horaCliente"
                    value={form.hora}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        hora: e.target.value,
                      })
                    }
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="campo-form" colSpan="2">
                <div className="mb-3">
                  <label htmlFor="descripcionPelicula" className="form-label">
                    Descripción
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="descripcionPelicula"
                    value={form.descripcion}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        descripcion: e.target.value,
                      })
                    }
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <div className="btn-form">
        <div className="buttons">
          <NavLink to="/login">
            <button
              type="button"
              className="btn btn-primary"
              onClick={registrarReserva}
            >
              HACER LA RESERVACIÓN
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ReservationForm;
