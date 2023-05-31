import { ButtonTask } from "./ButtonTask";
import { useState } from 'react';
import IconoAbarrotes from "../assets/kitchen.png";
import IconoFrutas from "../assets/fruits.png";
import IconoVerduras from "../assets/verduras.png";
import IconoLacteos from "../assets/cheese.png";
import IconoBebidas from "../assets/drinks.png";
import IconoHogar from "../assets/home.png";
import IconoMascotas from "../assets/pets.png";
import IconoHigiene from "../assets/cleaning.png";
import Descripcion from "./Descripcion";

const diccionarioIconos = {
  Abarrotes: IconoAbarrotes,
  Frutas: IconoFrutas,
  Verduras: IconoVerduras,
  Lacteos: IconoLacteos,
  Bebidas: IconoBebidas,
  Hogar: IconoHogar,
  Mascotas: IconoMascotas,
  Higiene: IconoHigiene,
};

const Item = ({ nombreItem, setNewItem }) => {
  const [completado, setCompletado] = useState(false);
  const [visible, setVisible] = useState(true);

  const checkTask = () => {
    setCompletado(!completado);
  };

  const deleteTask = () => {
    setVisible(!visible);
  };

  const editTask = () => {
    console.log("EDITAR");
    setNewItem(true);
  };

  return (
    <>
      {visible && (
        <div className="flex flex-row justify-between items-center p-2 m-3 bg-white shadow-lg rounded-md py-5 w-full lg:w-1/2 mx-auto">
          <img className="ml-5" src={diccionarioIconos[nombreItem.categoria]} alt="Icono Gasto" />

          <div>
            <Descripcion nombre="Producto" valor={nombreItem.nombre} completado={completado} />
            <Descripcion nombre="Cantidad" valor={nombreItem.cantidad} completado={completado} />
            <Descripcion nombre="Categoria" valor={nombreItem.categoria} completado={completado} /> 
          </div>
          
          <div className="flex flex-row">
            <ButtonTask tipoBoton="edit" accion={editTask}/>
            <ButtonTask tipoBoton="check" accion={checkTask}/>
            <ButtonTask tipoBoton="delete" accion={deleteTask}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;