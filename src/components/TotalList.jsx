export const TotalList = ({ items }) => {
    const total = items.reduce((total) => total + 1, 0);
  
    return (
      <div className="w-1/2 h-screen p-4 text-white text-lg">
        <p> Cantidad de productos en lista: {total}</p>
      </div>
    );
};