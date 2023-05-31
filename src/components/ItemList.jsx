import Item from "./Item";

const ItemList = ({ items, setItems, setNewItem }) => {

  const deleteItem = (item) => {
    const itemIndex = items.indexOf(item);
    const newItems = items.splice(itemIndex, 1);
    setItems([...items]);
    console.log(items);
  };

  return (
    <div className="w-1/2 h-screen">
      <h2 className="text-lg font-bold text-white underline">{items.length > 0 ? "Productos" : "No hay productos"}</h2>
      {
        items.map((item) => (
          <Item
            item={item} 
            setNewItem={setNewItem}
            deleteItem={deleteItem}
          />
        ))
      }
    </div>
  );
};

export default ItemList;
