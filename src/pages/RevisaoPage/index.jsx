import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./revisaoPage.css"
import { useContext, useEffect} from "react"
import { EnderecoContext } from "../../contexts/enderecoContext"
import { CartContext } from "../../contexts/cartContext"
import { Link, useNavigate } from "react-router-dom"


const RevisaoPage = () => {

    // Define o title do página e faz a tela aparecer no topo
    useEffect(() => {

        document.title = "Loja Bonita | Revisão"
        window.scrollTo(0, 0)

    }, [])

    const navigate = useNavigate()

    const {endereco, setEndereco} = useContext(EnderecoContext);
    const {cart, setCart} = useContext(CartContext);

    // Criar a página de revisão
    const buildCart = () => {

        const items = cart.map((item, key) => {
            return (
                <ul>
                    <li>{item.nome} ( {item.qntItem} ) - R$ {item.preco.toFixed(2)}</li>
                </ul>
            )
        })

        return items;

    }

    // Pega o valor total do carrinho
    const getTotalPrice = () => {
        return cart.reduce((acc, current) => {
          return acc += current.preco;
        }, 0)
    };

    // Quando clicado em confirmar, o usuário vai para a tela inicial e o carrinho/endereço são resetados
    const resetData = () => {
        alert("Pedido concluido com sucesso!");
        navigate("/");
        setCart([]);
        setEndereco({});
    }   

    return (

        <div className="RevisaoPage">
            <Header/>
            
            <div className="content__revisao">
                <div className="content__revisao__produtos">
                    <h2>Produtos</h2>
                    {buildCart()}
                    <span className="content__revisao__total">
                        Valor Total: R$ {getTotalPrice().toFixed(2)}
                    </span>
                </div>
                <div className="content__revisao__endereco">
                    <h2>Endereço</h2>
                    <div>CEP: {endereco.cep}</div>
                    <div>Cidade: {endereco.cidade}</div>
                    <div>Bairro: {endereco.bairro}</div>
                    <div>Logradouro: {endereco.logradouro}</div>
                    <div>Complemento: {endereco.complemento}</div>
                </div>
                <div className="content__revisao__buttons">
                    <div>    
                        <button className="confirm" onClick={resetData}>
                            Concluir Pedido
                        </button>
                    </div>
                    <div>
                        <button className="back">
                            <Link to={"/carrinho"}>Voltar para o carrinho</Link>
                        </button>
                    </div>

                </div>
            </div>
            <Footer/>

        </div>
    )

}

export default RevisaoPage