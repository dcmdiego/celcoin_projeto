import { useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import {EnderecoContext} from "../../contexts/enderecoContext"
import RoutesApp from "../../routes/RoutesApp";
import "./app.css"



function App() {

  const [cart, setCart] = useState([]);
  const [endereco, setEndereco] = useState({});

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <EnderecoContext.Provider value={{endereco, setEndereco}}>
          <RoutesApp/>
        </EnderecoContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
