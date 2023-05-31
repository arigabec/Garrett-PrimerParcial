const Descripcion = ({nombre, valor, completado}) => {
    return (
        <p className={`font-semibold text-gray-500 text-lg ${completado && "line-through"}`}>
            <span className={`font-bold text-lime-700 text-lg ${completado && "line-through"}`}>
                {nombre}{": "}
            </span>
            {valor}
        </p>
    );
};

export default Descripcion;