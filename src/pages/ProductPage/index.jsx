import Header from "../../components/Header"
import ProductDetail from "../../components/ProductDetail";
import Footer from "../../components/Footer";
import "./productPage.css"

import {useEffect, useState } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const ProductPage = () => {

    useEffect(() => {

        document.title = "Loja Bonita | Produto"
        window.scrollTo(0, 0)

    }, [])

    const params = useParams()

    const [product, setProduct] = useState('');

    useEffect(() => {

        const url = process.env.REACT_APP_API_KEY
        axios.get(`${url}/produtos/${params.produtoId}`)
        .then(res => {
            setProduct(res.data)
        })
        .catch (e => {
            console.log("Erro!", e)
        })

    }, [params.produtoId]);

    return (

        <div className="ProductPage">

            <Header/>   

            <div className="content">

            {
                product ?             
                
                <ProductDetail
                id={product.id}
                nome={product.nome}
                descricao={product.descricao}
                preco={product.preco}
                />

                : 

                <Loading/>
            }

            </div>

            <Footer/>
            
        </div>

    )

}

export default ProductPage;