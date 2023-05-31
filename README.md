# Lista de Compras - Primer Parcial
Nombre: Ariane Garrett

Código: 54617

## Resumen
Para este parcial trabajé en una lista de compras en la que los usuarios puedan añadir y eliminar diferentes tarjetas que 
contienen la descripción de los productos que desean o necesitan comprar a la hora de hacer compras.

El funcionamiento es sencillo, simplemente deben ingresar a la página y hacer click en el ícono de añadir un elemento. 
Posteriormente deben llenar los datos requeridos para así añadir un producto de manera correcta. Y listo! Podrán visualizar la lista 
de compras y marcar los productos ya comprados, además de eliminarlos posteriormente.

Para poder trabajar en el proyecto adecuadamente utilicé *Vite* para poder visualizar la página en funcionamiento y *Tailwind CSS* 
para darle estilos a la la página.

## Video
El link donde se encuentra el video explicativo del parcial es el siguiente: 
https://drive.google.com/drive/folders/1fs9sheIF2hUZLA5iAueDfnWcEa5kBDsk?usp=sharing

## Primeras configuraciones
Para iniciar el proyecto, debemos clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/arigabec/Garrett-PrimerParcial.git
```
Una vez obtenido el proyecto completo debemos ejecutar los siguientes comandos en la rama *master*, en la carpeta donde clonamos el proyecto,
ya que ahí se encuentra el contenido de la página.

```bash
cd Garrett-PrimerParcial
npm install
npm run dev
```
Ahora nos dirigimos a la dirección de localHost obtenida, para poder visualizar la página en funcionamiento.

## useState
Utilicé useState para controlar el contenido del formulario de la página en base a un estado. En mi caso, la lista de items y el estado para
verificar si estamos añadiendo un nuevo item o no, trabajan con esta funcionalidad.

```bash
const [newItem, setNewItem] = useState(false);
const [items, setItems] = useState([]);
```

Tambien utilicé esta funcionalidad para verificar el estado de una tarjeta existente en la lista de productos, para así poder marcarla como 
completada o para poder eliminarla.

```bash
const [completado, setCompletado] = useState(false);
const [visible, setVisible] = useState(true);
```

## useEffect y localStorage
Utilicé useEffect para guardar los datos del formulario en el almacenamiento local (localStorage) cada vez que cambien. En mi caso, esta funcionalidad se encarga de realizar cierta acción cada que se modifica la lista de items y el estado para verificar si estamos añadiendo un nuevo item o no, y guarda los valores en el localStorage.

```bash
useEffect(() => {
    console.log('Se cambio items', items);
    localStorage.setItem('items', items);
  }, [items]);

useEffect(() => {
    console.log('Se cambio newItem', items);
    localStorage.setItem('newItem', newItem);
}, [newItem]);
```

Para poder verificar esto, popdemos dirigirnos a la opcion de "Herramientas para desarrolladores" de la página abierta e ingresar a la opción de 
*Aplicación*, donde podemos ver el localStorage de la página que se encuentra en localHost, que se encarga de almacenar los datos del formulario
de manera persistente.

## .reduce() y .map()
Utilicé estos métodos para renderizar una lista de características de la página de manera dinámica.

.map() → lo utilicé para poder visualizar los elementos de la lista de compras.

```bash
items.map((item) => (
  <Item
    item={item} 
    setNewItem={setNewItem}
    deleteItem={deleteItem}
  />
))
```
      
.reduce() → lo utilicé para poder visualizar un contador que nos indique cuantos elementos existen en la lista de compras.

```bash
const total = items.reduce((total) => total + 1, 0);
  return (
    <div className="w-1/2 h-screen p-4 text-white text-lg">
      <p> Cantidad de productos en lista: {total}</p>
    </div>
  )
```

## Componentes
La página en la que trabajé tiene los siguientes componentes:
- ButtonTask: el componente sirve para mostrar los botones de *editar*, *marcar como completado* y *eliminar* una tarjeta de la lista de compras.
- Description: el componente sirve para mostrar la información contenida en cada tarjeta (nombre del producto, cantidad, categoría).
- FormNewItem: el componente sirve para mostrar el formulario donde podemos añadir los datos del producto que queremos añadir a la lista de compras.
- Item: el componente sirve para mostrar la tarjeta con la información de un producto añadido a la lista de compras. 
- ItemList: el componente sirve para mostrar todas las tarjetas existentes en la lista de compras.
- Modal: el componente sirve para mostrar el formulario para poder añadir un nuevo producto a la lista.
- TotalList: el componente sirve para mostrar el contador de productos existente en la lista.

## App
Este archivo se encarga de poder mostrar todos los anteriores componentes, además de que varias funcionalidades de useState y useEffect se encuentran aquí. El *main.jsx* es quien llama a *App.jsx* para poder ver la página funcionando en el localHost.
