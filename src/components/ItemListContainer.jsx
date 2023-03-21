import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const response = await fetch('./productos.json');
      const data = await response.json();
      setProductos(data);
      console.log('Productos:', data); 
    };

    obtenerProductos();
  }, []);

  console.log('Productos:', productos); 

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{greeting}</h1>
        <hr className="my-4" />
        <p className="lead">Aquí podrás encontrar la mejor variedad de productos orgánicos.</p>
      </div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;


