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
import Descripcion from "./Description";

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

const Item = ({ item, setNewItem, deleteItem }) => {
  const [completado, setCompletado] = useState(false);
  const [visible, setVisible] = useState(true);

  const checkTask = () => {
    setCompletado(!completado);
  };

  const deleteTask = () => {
    deleteItem(item);
    setVisible(!visible);
  };

  const editTask = () => {
    setNewItem(true);
  };

  return (
    <>
      {visible && (
        <div className="flex flex-row justify-between items-center p-2 m-3 bg-white shadow-lg rounded-md py-5 w-full mx-auto">
          <img className="ml-5" src={diccionarioIconos[item.categoria]} alt="Icono Gasto" />

          <div>
            <Descripcion nombre="Producto" valor={item.nombre} completado={completado} />
            <Descripcion nombre="Cantidad" valor={item.cantidad} completado={completado} />
            <Descripcion nombre="Categoria" valor={item.categoria} completado={completado} /> 
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