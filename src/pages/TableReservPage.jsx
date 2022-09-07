import React, { useState } from "react";
import { database } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import imgReservation from "../images/reservation.png";

import "./styles/TableReservPage.css";

const TableReservPage = () => {
  const [lista, setLista] = useState([]);

  const obtenerReservacion = async () => {
    const resp = await getDocs(collection(database, "reservaciones"));
    const data = resp.docs.map((tab) => ({
      id: tab.id,
      ...tab.data(),
    }));
    console.log(data);
    setLista(data);
  };
  obtenerReservacion();
  return (
    <div className="body-tb">
      <div className="tl-rev">
        <img src={imgReservation} alt="Reservación" />
        <div className="cont-titulo">
          <h1 className="cont-ttl">RESERVACIONES SIN CUENTA</h1>
        </div>
        <img src={imgReservation} alt="Reservación" />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Fecha</th>
            <th scope="col">Comentario</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((list) => (
            <tr key={list.id}>
              <th scope="row" className="nombre-tbl">
                {list.nombre}
              </th>
              <td>{list.cantidad}</td>
              <td>
                {list.fecha} | {list.hora}
              </td>
              <td>{list.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="botones">
        <NavLink to="/menu">
          <button type="submit" className="btn btn-primary">
            Ver Menu
          </button>
        </NavLink>
        <NavLink to="/table">
          <button type="submit" className="btn btn-success">
            Volver a Reservaciones
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default TableReservPage;
