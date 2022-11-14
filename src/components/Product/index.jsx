import { useNavigate } from "react-router-dom"
import "./product.css"

const Product = (props) => {

    const navigate = useNavigate()

    const handlePage = () => {
        navigate(`/produto/${props.id}`)
    }

    return (

        <div className="Product">

            <div className="product__item">

                <div className="product__image"></div>

                <div className="product__text">
                    <h2 className="title">{props.title}</h2>
                    <p className="price">R$ {props.value.toFixed(2)}</p>
                </div>

                <div className="product__button">
                    <button onClick={handlePage}>Comprar</button>
                </div>

            </div>


        </div>

    )

}

export default Product