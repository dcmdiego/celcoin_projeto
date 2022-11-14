import Header from "../../components/Header"
import Products from "../../components/Products";
import Footer from "../../components/Footer";
import "./productsPage.css"
import { useEffect } from "react";


const ProductsPage = () => {

    // Define o title do página e faz a tela aparecer no topo
    useEffect(() => {
        document.title = "Loja Bonita | Produtos";
    }, [])


    return (

        <div className="ProductsPage">

            <Header/>   

            <div className="content">

            <Products/>

            </div>

            <Footer/>
            
        </div>

    )

}

export default ProductsPage;