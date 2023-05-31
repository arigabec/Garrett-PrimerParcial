import {BsCheckLg} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'


export const ButtonTask = ({ tipoBoton, accion }) => {
  tipoBoton = tipoBoton.toLowerCase();

  return (
    <button className='bg-transparent hover:bg-slate-300 active:bg-slate-400 text-lg m-3' onClick={accion} >
      { tipoBoton==="check" && (
        <BsCheckLg />
      )}

      { tipoBoton==="delete" && (
        <AiFillDelete />
      )}

      { tipoBoton==="edit" && (
        <BiEditAlt />
      )}
    </button>
  );
};
