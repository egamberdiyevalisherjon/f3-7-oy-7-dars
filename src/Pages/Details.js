import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Details = (props) => {
  let history = useHistory();

  const id = props.match.params.id;
  
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function getProduct() {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await res.json();
      setProduct(data);
    }
    getProduct();
  }, [id]);

  function getBackToHome() {
    history.goBack();
  }

  return (
    product && (
      <>
        <div className="container">
          <button onClick={getBackToHome}>back to Home</button>
          <h2 className="display-1">Details for product id: {id}</h2>
          <h3>{product.title}</h3>
          <h4>Price: ${product.price}</h4>
          <p>{product.description}</p>
          <img src={product.image} alt="" />
        </div>
      </>
    )
  );
};

export default Details;
