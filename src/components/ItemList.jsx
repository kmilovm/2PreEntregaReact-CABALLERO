function ItemList({ productos }) {
    console.log('Productos en ItemList:', productos); 
    return (
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card">
              <img
                src={`../img/productos/${producto.imagen}`}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text font-weight-bold">${producto.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ItemList;  
