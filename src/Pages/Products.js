import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div className="container">
      <a href="/robots.txt" download="habiba_resume">
        Resume skachat qilish
      </a>
      <div className="row">
        {products.map((product, index) => {
          console.log(product);
          return (
            <div className="col-md-3" key={index}>
              <Link to={`/details/${product.id}`}>
                <div className="card">
                  <img src={product.image} alt="" className="card-image-top" />
                  <div className="card-body">
                    <p className="card-title">{product.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
