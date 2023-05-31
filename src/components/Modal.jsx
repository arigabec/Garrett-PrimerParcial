import CerrarBtn from "../assets/cerrar.svg";
import FormNewItem from "./FormNewItem";

const Modal = ({ items, setItems, setNewItem, editarItem }) => {
  const ocultarModal = () => {
    setNewItem(false);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-start h-screen bg-custom-black">
      <div className="absolute right-3 top-3 w-5 h-5">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <FormNewItem items={items} setItems={setItems} setNewItem={setNewItem}/>
    </div>
  );
};

export default Modal;
