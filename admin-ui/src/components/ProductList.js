import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5300/products",{
      headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
      }
    });
    result = await result.json();
    setProducts(result);
  };
  const deleteProduct=async(id)=>{
    let result=await fetch(`http://localhost:5300/product/${id}`,{
        method:"Delete",       
    });
    result=await result.json();
    if(result){
        getProducts();
    }
      
  }
  return (
    <div className="product-list">
      <h3>productlist</h3>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>category</li>
        <li>company</li>
        <li>Operation</li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
          <Link to={"/Update/"+item._id}>update</Link></li>
        </ul>
      ))}
    </div>
  );
};
export default ProductList;
