import Header from "../../components/Header"
import Footer from "../../components/Footer";
import "./carrinhoPage.css"
import { useContext, useEffect } from "react";
import CartProducts from "../../components/CartProducts";
import { CartContext } from "../../contexts/cartContext";
import Form from "../../components/Form";


const CarrinhoPage = () => {

    const {cart} = useContext(CartContext)

    // Define o title do página e faz a tela aparecer no topo
    useEffect(() => {
        document.title = "Loja Bonita | Carrinho";
        window.scrollTo(0, 0)
    }, []);


    // Constroi a página do carrinho
    const buildCart = () => {

        if (cart.length < 1) {
            return <h2 className="empty">Sem itens no carrinho!</h2>
        } else{ 
            return (
                <>
                    <CartProducts/>
                    <Form/>
                </>
            )
        }

    }

    return (

        <div className="CarrinhoPage">

            <Header/>

            <div className="content">

                {buildCart()}
                    
            </div>

            <Footer/>

        </div>

    )

}

export default CarrinhoPage;