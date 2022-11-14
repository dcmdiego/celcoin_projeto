import "./cartProduct.css"
import { BsFillTrashFill } from "react-icons/bs";

const CartProduct = (props) => {

   return (

        <div className="CartProduct">

            <div className="image"></div>

            <div className="product">
                <div className="title">
                    <h2>{props.nome}</h2>
                </div>

                <div>
                    R$ {props.preco.toFixed(2)}
                </div>

                <div className="quantity">
                    <button className="quantity__less">-</button>
                    <span>{props.quantidade}</span>
                    <button className="quantity__more">+</button>
                </div>  

            </div>

            <div className="remove__product">
                <button className="remove__product__button">
                    <div className="remove__product__text">Remover</div>
                    <BsFillTrashFill/>
                </button>
            </div>

        </div>
    )

}

export default CartProduct;