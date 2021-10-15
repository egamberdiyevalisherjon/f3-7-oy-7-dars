import "./App.css";
import Products from "./Pages/Products";
import { Route } from "react-router-dom";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <h1 className="text-center my-3">My Shop</h1>
      <Route component={Details} path="/details/:id" exact />
      <Route component={Products} path="/" exact />
      <Route component={Products} path="/products" exact />
    </>
  );
}

export default App;
