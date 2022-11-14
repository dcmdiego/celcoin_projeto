import Header from "../../components/Header"
import Footer from "../../components/Footer";
import "./inicioPage.css"
import { useEffect } from "react";

const InicioPage = () => {

    // Define o title do página e faz a tela aparecer no topo
    useEffect(() => {
        document.title = "Loja Bonita | Incio";
    }, [])

    return (

        <div className="InicioPage">

            <Header/>

            <div className="content">

                <h2>
                    Loja especializada em vestimentas de alto padrão
                </h2>

                <ul className="info__list">
                    <li className="info__item">Roupas maneiras e descoladas</li>
                    <li className="info__item">Nova tendência no mercado</li>
                </ul>

                <h2>
                    Trabalhamos com: 
                </h2>

                <ul className="section__list">
                    <li className="section__item">
                        Tênis
                    </li>
                    <li className="section__item">
                        Camisas
                    </li>
                    <li className="section__item">
                        Calças
                    </li>
                </ul>

            </div>

            <Footer/>

        </div>

    )

}

export default InicioPage;