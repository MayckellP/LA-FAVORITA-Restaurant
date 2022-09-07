import React, { useState } from "react";
import { database } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { NavLink } from "react-router-dom";

import "./styles/MenuPage.css";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);

  const obtenerMenu = async () => {
    const resp = await getDocs(collection(database, "menu"));
    const data = resp.docs.map((menus) => ({
      id: menus.id,
      ...menus.data(),
    }));
    //console.log(data);
    setMenu(data);
  };
  obtenerMenu();

  return (
    <div className="body-men">
      <div className="cont-reserv-global">
        <div className="cont-reservation">
          <h1>Menú Completo</h1>
          <NavLink to="/reservation">
            <button
              type="button"
              className="btn btn-primary"
              //onClick={obtenerProducto}
            >
              Hacer una Reservación
            </button>
          </NavLink>
        </div>
        <section className="row">
          <article className="col">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {menu.map((menu) => {
                return (
                  <div className="col" key={menu.id}>
                    <div className="card h-100">
                      <img
                        src={menu.img}
                        className="card-img-top"
                        alt="NOMBRE DEL PRODUCTO"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{menu.nombre}</h5>
                        <p className="card-text">Descripción del Producto</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">$ {menu.precio}</small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default MenuPage;
