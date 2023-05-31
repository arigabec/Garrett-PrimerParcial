import { useState } from "react";

const FormNewItem = ({ items, setItems, setNewItem }) => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = [
      {
        nombre,
        cantidad,
        categoria,
      },
    ];
    setItems([...items, ...item]);
    setNewItem(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/3 mx-auto mt-20">
      <h2 className="text-stone-500 text-3xl text-center font-bold my-5">
        Agregar/editar producto
      </h2>
      <form onSubmit={handleSubmit} className="px-5">
        <div className="campo">
          <label className="label-form" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label className="label-form" htmlFor="cantidad">
            Cantidad
          </label>
          <input
            id="cantidad"
            type="text"
            placeholder="Añade la cantidad requerida"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>

        <div className="campo">
          <label className="label-form" htmlFor="fecha">
            Categoría
          </label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione una categoria --</option>
            <option value="Abarrotes"> Abarrotes </option>
            <option value="Frutas"> Frutas </option>
            <option value="Verduras"> Verduras </option>
            <option value="Lacteos"> Lacteos </option>
            <option value="Bebidas"> Bebidas </option>
            <option value="Hogar"> Hogar </option>
            <option value="Mascotas"> Mascotas </option>
            <option value="Higiene"> Higiene </option>
          </select>
        </div>

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
          value={"Añadir a la lista"}
        />
      </form>
    </div>
  );
};

export default FormNewItem;