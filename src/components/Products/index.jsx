import { useEffect, useState } from "react"
import Product from "../Product"
import "./products.css"
import axios from 'axios';
import Loading from "../Loading";
import { AiOutlineSearch } from "react-icons/ai";

const Products = () => {

    // States
    const [products, setProducts] = useState (null);
    const [busca, setBusca] = useState('');

    // Chamadada da API para pegar os produtos
    useEffect(() => {
        
        const url = process.env.REACT_APP_API_KEY
        axios.get(`${url}/produtos`)
        .then(res => {
            setProducts(res.data)
        })
        .catch(e => {
            console.log("Erro!", e)
        })

    }, []);

    // Construir os componentes de produtos
    // Além disso, aqui é onde fica o filtro de busca
    const buildProducts = () => {

        if (!products) {
            return <Loading/>
        }

        return products

            .filter((product) => {
                return busca.toLowerCase() === ''
                ? product
                : product.nome.toLowerCase().includes(busca.toLowerCase())
            })

            .map(product => {

                return (

                <Product
                key={product.nome}
                image={product.image}
                title={product.nome}
                value={product.preco}
                id={product.id}
                />

                )
        })

    }

    // Botão para limpar a barra de pesquisa
    const clearSearch = () => {
        setBusca('')
    }

    return (

        <div className="Products">

            <div className="products__search">

            <label className="search__icon" htmlFor="search">
                <AiOutlineSearch/>
            </label>

            <input 
            type="text"
            id="search"
            autoFocus 
            placeholder="Pesquisa"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            />

            <span onClick={clearSearch} className="search__remove">X</span>

            </div>

            <div className="products__list">
                {buildProducts()}
            </div>

        </div>

    )

}

export default Products