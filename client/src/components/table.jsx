import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Table = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://127.0.0.1:5000/product");
      if(res.ok) {
        const json = await res.json();
        setProducts(json);
      }
    }

    getProducts();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch("http://127.0.0.1:5000/product/" + id, {
      method: "DELETE"
    });
    if(res.ok) {
      const json = await res.json();
      alert("producto eliminado correctamente");
      setProducts(json.data);
    }
  }

  return (
    <div className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Controles</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link to={`edit/${product.id}`} className='btn btn-warning'>Editar</Link>
                  <button onClick={() => handleDelete(product.id)} className='btn btn-danger'>Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table