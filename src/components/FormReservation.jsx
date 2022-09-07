import React, { useState } from "react";
import { database } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  //updateDoc,
  doc,
} from "firebase/firestore";

const formularioInicializado = {
  nombre: "",
  descripcion: "",
  precio: 0,
};

const FormReservation = () => {
  //OBTENER PELICULA
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState(formularioInicializado);

  const obtenerPelicula = async () => {
    const resp = await getDocs(collection(database, "peliculas"));
    const data = resp.docs.map((pelicula) => ({
      id: pelicula.id,
      ...pelicula.data(),
    }));

    console.log(data);
    setMovies(data);
  };

  //CREAR PELICULA
  const crearPelicula = async () => {
    const collectionPelicula = collection(database, "peliculas");
    await addDoc(collectionPelicula, form);
    await obtenerPelicula();
    console.log(form);
  };

  //ELIMINAR PELICULA
  const eliminarPelicula = async (id) => {
    const docToDelete = doc(database, "peliculas", id);
    await deleteDoc(docToDelete);
    await obtenerPelicula();

    console.log(id);
  };

  //EDITAR PELICULA

  return (
    <>
      <form>
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

        <div className="mb-3">
          <label htmlFor="precioPelicula" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="precioPelicula"
            value={form.precio}
            onChange={(e) =>
              setForm({
                ...form,
                precio: e.target.value,
              })
            }
          />
        </div>
      </form>
      <div className="buttons">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={obtenerPelicula}
          >
            Obtener Películas
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={crearPelicula}
          >
            Crear Película
          </button>
        </div>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <th scope="row">{movie.id}</th>
                <td>{movie.nombre}</td>
                <td>{movie.descripcion}</td>
                <td>{movie.precio}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    //onClick={obtenerPelicula}
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarPelicula(movie.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormReservation;
