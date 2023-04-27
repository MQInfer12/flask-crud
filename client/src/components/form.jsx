import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = ({ id }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    const getProduct = async (id) => {
      const res = await fetch("http://127.0.0.1:5000/product/" + id);
      if(res.ok) {
        const json = await res.json();
        setName(json.name);
        setPrice(json.price);
        setStock(json.stock);
      }
    }

    if(id) {
      getProduct(id);
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://127.0.0.1:5000/product${id ? `/${id}` : ""}`, {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        price: price,
        stock: stock
      })
    });
    if(res.ok) {
      alert(`Se ${id ? "editó" : "añadió"} el producto correctamente`);
      navigate("/");
    }
  }

  return (
    <form className='d-flex flex-column gap-2'>
      <div className="form-group">
        <label for="exampleInputEmail1">Nombre</label>
        <input 
          type="text" 
          className="form-control" 
          id="exampleInputEmail1" 
          placeholder="Ingresa un nombre" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Precio</label>
        <input 
          type="number" 
          className="form-control" 
          id="exampleInputPassword1" 
          placeholder="Ingresa un precio" 
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Stock</label>
        <input 
          type="number" 
          className="form-control" 
          id="exampleInputPassword1" 
          placeholder="Ingresa el stock" 
          value={stock}
          onChange={e => setStock(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary">{id ? "Editar" : "Añadir"}</button>
    </form>
  )
}

export default Form