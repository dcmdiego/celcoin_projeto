import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import "./header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {

    const {cart} = useContext(CartContext)

    return (

        <header className="Header">

            <div className="header__logo">
                <Link to={"/"}>Logo</Link>
            </div>
            
            <nav className="header__nav">
    
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/produtos"}>Produtos</Link>
                </li>
                <li className="cart">
                    <Link to={"/carrinho"}>
                        <AiOutlineShoppingCart/>
                        <span>{cart.length}</span>
                    </Link>

                </li>
            </ul>
    
            </nav>

      </header>

    )

}

export default Header;