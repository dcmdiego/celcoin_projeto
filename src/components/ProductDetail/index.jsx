import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/cartContext"
import "./productDetail.css"

const ProductDetail = (props) => {

    // States
    const basePrice = props.preco;
    const [qntItem, setQntItem] = useState(1);
    const [totalPrice, setTotalPrice] = useState(basePrice);
    const [productOnCart, setProductOnCart] = useState("Adicionar ao carrinho");

    // Navegação
    const navigate = useNavigate()
    const handleBack = () => {
        navigate("/produtos")
    }

    // Carrinho 
    const {cart, setCart} = useContext(CartContext);
    const [product, setProduct] = useState({});

    // Atualizar o produto
    useEffect(() => {
        setProduct({
            id: props.id,
            nome: props.nome,
            preco: totalPrice,
            qntItem: qntItem,
        })
    }, [totalPrice])


    // Somar e Diminuir a quantidade dos itens
    const SumItem = () => {
        setQntItem(qntItem + 1);
    };

    const SubItem = () => {
        setQntItem(qntItem - 1);
    };

    // Atualizar o preço total do produto
    const TotalPrice = () => {
        setTotalPrice(qntItem * basePrice)
    };

    // Verificar se a quantidade é menor que 1 (situação que não pode acontecer)
    useEffect(() => {

        if (qntItem < 1) {
            SumItem()
        }

        else {
            TotalPrice()
    }

    }, [qntItem]);

    // Adicionar o produto no carrinho
    const addProductCart = () => {
        if (isProductAlreadyOnCart()) {
            setProductOnCart("Produto já está no carrinho");
        } else {
            setCart([...cart, product]);
        }
    };
    
    // Verificar se o produto já está adicionado
    const isProductAlreadyOnCart = () => {
        return cart.find(productOnCart => product.id === productOnCart.id);
    }

    return (

        <div className="ProductDetail">

            <div className="image__item"></div>

            <div className="content__item">

                <div className="title">
                    <h2>{props.nome}</h2>
                </div>

                <div className="info">
                    <div className="info__title">Descrição</div> 

                    <ul className="info__list">
                        <li>{props.descricao}</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit totam nulla possimus iure. Voluptatum sed aspernatur molestiae soluta quisquam quia fugiat. Labore, enim aspernatur libero amet perferendis iure eius illo?</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit totam nulla possimus iure. Voluptatum sed aspernatur molestiae soluta quisquam quia fugiat. Labore, enim aspernatur libero amet perferendis iure eius illo?</li>
                    </ul>

                </div>

                <div className="price">
                    R$ {totalPrice}
                </div>

                <div className="quantity">
                    <button className="quantity__less" onClick={SubItem}>-</button>
                    <span>{qntItem}</span>
                    <button className="quantity__more" onClick={SumItem}>+</button>
                </div>  

                <div className="buy">
                    <button onClick={addProductCart}>
                        {productOnCart}
                    </button>
                </div>

                <div className="back">
                    <button onClick={handleBack}>Voltar</button>
                </div>

            </div>

        </div>

    )

}

export default ProductDetail;