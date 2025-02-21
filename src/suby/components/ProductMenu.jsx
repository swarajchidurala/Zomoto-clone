import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api";
import TopBar from "./TopBar";


const ProductMenu = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


  const { firmId, firmName } = useParams();
    

  const productHandler = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      setError(error.message);
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {loading && <div>Loading products...</div>}
        {error && <div className="error">Error: {error}</div>}
        {!loading && !error && products.map((item) => {

          return (
            <div className="productBox">
              <div>
                <div><strong>{item.productName}</strong></div>
                <div>₹{item.price}</div>
                <div>{item.description}</div>
              </div>
              <div className="productGroup">
                <img src={`${API_URL}/uploads/${item.image}`} />
                <div className="addButton">ADD</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
