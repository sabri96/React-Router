import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link}from'react-router-dom';
import './App.css';



const Products = ()=>(
  <Router>
  <div>
    <h1>Products</h1>
    <nav>
      <ul>
        <li>
          <Link to="/1">NIKE Liteforce Blue Sneakers</Link>
        </li>
        <li>
          <Link to="/2">U.S. POLO ASSN. Slippers</Link>
        </li>
        <li>
          <Link to="/3">ADIDAS Adispree Running Shoes</Link>
        </li>
        <li>
          <Link to="/4">Lee Cooper Mid Sneakers</Link>
        </li>
      </ul>
    </nav>
</div>
<Switch>
      <Route path="/1">
        <Product />
      </Route>
      <Route path="/2">
        <Demo />
      </Route>
      <Route path="/3">
        <Text />
      </Route>
      <Route path="/4">
        <Box />
      </Route>
    </Switch>
</Router>
);

const Product = ()=>(
  <div>
    <h1>NIKE</h1>
    <p>Nike est une société américaine créée en 1971 par Philip Knight et Bill Bowerman.</p>
    <hr />
    <h3>Available</h3>
  </div>
  );

const Demo =() =>(
  <div>
  <h1>U.S. POLO ASSN. Slippers</h1>
  <p>The United States Polo Association is the national governing body for the sport of polo in the United States.</p>
  <hr />
  <h3>Available</h3>
  </div>

);

const Text =()=>(
  <div>
    <h1>ADIDAS Adispree Running Shoes</h1>
    <p>adidas est une firme allemande fondée en 1949 par Adolf Dassler, spécialisée dans la fabrication d'articles de sport, basée à Herzogenaurach en Allemagne</p>
  <hr />
  <h3>Available</h3>
  </div>
);

const Box =()=> (
  <div>
    <h1>Lee Cooper Mid Sneakers</h1>
    <p>Lee Cooper est une entreprise de confection textile anglaise, célèbre pour ses blue-jeans, filiale d'Iconix Brand Group</p>
  <hr />
  <h3>Out of Stock</h3>
  </div>
);


export default Products;