import React from 'react';
//import ProductDataService from '../services/Product.service.js';
import { useState, useEffect } from 'react';
import ProductContainer from './ProductContainer';
import './Home.css';

function Home() {

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    //fetch('http://127.0.0.1:8000/product') 
   //fetch("https://fakestoreapi.com/products")
   fetch("https://localhost:44368/api/Products")
   .then(reponse => reponse.json())
   .then(data => {
       setProducts(data);
   });
}, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
    return (
          <div class="Home-container">
          <ProductContainer products = {products}/>
    </div>
    );

}

export default Home;