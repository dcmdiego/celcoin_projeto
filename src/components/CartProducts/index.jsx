import "./cartProducts.css"
import CartProduct from "../CartProduct"
import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"

const CartProducts = () => {

    const {cart, setCart} = useContext(CartContext)

    // Criar os produtos
    const buildCartProducts = () => {

        const itemCart = cart.map(item => {
            return (
                <CartProduct
                key={item.id}
                id={item.id}
                nome={item.nome}
                preco={item.preco}
                quantidade={item.qntItem}
                />
            )
        })

        return itemCart;

    }
    
    // Pega o valor total dos produtos
    const getTotalPrice = () => {
        return cart.reduce((acc, current) => {
          return acc += current.preco;
        }, 0)
    };

    // Reseta o carrinho
    const resetCart = () => {
        setCart([])
    };

    return (

        <div className="CartProducts">

            {buildCartProducts()}

            <div className="cart__infos">   

                <div className="price__total">
                <p>Valor Total</p>
                <span>R$</span>
                {getTotalPrice().toFixed(2)}
                </div>

                <div className="resetCart">
                    <button onClick={resetCart}>Limpar Carrinho</button>
                </div>

            </div>



        </div>

    )

}

export default CartProducts;
