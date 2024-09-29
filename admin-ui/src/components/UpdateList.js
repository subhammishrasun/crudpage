import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5300/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };
  const updateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5300/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="update Product Name"
        className="inputBox"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="text"
        placeholder="update Product price"
        className="inputBox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />

      <input
        type="text"
        placeholder="update Product category"
        className="inputBox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />

      <input
        type="text"
        placeholder="update Product company"
        className="inputBox"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />

      <button onClick={updateProduct} className="button">
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;
