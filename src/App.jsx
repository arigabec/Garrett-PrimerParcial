import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Item from "./components/Item";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";

function App() {
  const [newItem, setNewItem] = useState(
    localStorage.getItem('newItem') ? 
    localStorage.getItem('newItem') : false);
  const [items, setItems] = useState(
    localStorage.getItem('items') ? 
    localStorage.getItem('items') : []);

  useEffect(() => {
    console.log('Se cambio items', items);
    localStorage.setItem('items', items);
  }, [items]);

  useEffect(() => {
    console.log('Se cambio newItem', items);
    localStorage.setItem('newItem', newItem);
  }, [newItem]);

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-blue-400">
      <h1 className="text-3xl text-white font-bold m-5"> Lista de Compras</h1>
      {
        items.length > 0 && (
          items.map((item) => {
            return <Item nombreItem={item} setNewItem={setNewItem}/>
          })
        ) 
      }

      <div className="fixed bottom-5 right-5">
        <img
          className="w-10 hover:cursor-pointer"
          src={IconoNuevoGasto}
          alt="icono nuevo gasto"
          onClick={() => {
            setNewItem(true);
          }}
        />
      </div>

      {
         newItem && (
          <Modal
            items={items}
            setItems={setItems}
            setNewItem={setNewItem}
          />
        )
      }
    </div>
  );
}

export default App;