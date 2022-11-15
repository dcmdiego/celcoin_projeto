import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { EnderecoContext } from "../../contexts/enderecoContext";
import "./form.css"

const Form = () => {

    const {setEndereco} = useContext(EnderecoContext)

    // Navegação
    const navigate = useNavigate()

    // Dados Pessoais
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('')

    // Endereço
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [complemento, setComplemento] = useState('');

    // Caso o campo de CEP tenha mais de 8 digitos, faz chamada para a API de CEP
    useEffect(() => {

        if (cep.length === 8) {
            const url = process.env.REACT_APP_CPF_KEY;
            axios.get(`${url}/${cep}/json/`)
            .then(res => {
                setLogradouro(res.data.logradouro);
                setBairro(res.data.bairro);
                setCidade(res.data.localidade);
                setEstado(res.data.uf);
            })
            .catch(e => {
                console.log(e)
            })
        } 

        else{
            setLogradouro('');
            setBairro('');
            setCidade('');
            setEstado('');
        }

    }, [cep])


    // Cancelar o evento padrão do submit, define o endereço (objeto)
    const handleSubmit = (e) => {
        e.preventDefault();
        setEndereco({
            cep: cep, 
            logradouro: logradouro, 
            bairro: bairro, 
            cidade: cidade, 
            estado: estado, 
            complemento: complemento});
        navigate("/revisao");
    }

    return (

        <div className="Form">

            <form onSubmit={handleSubmit}>

                <div>
                    <h3>Dados Pessoais</h3>
                </div>

                    <div>
                        <label htmlFor="name">Nome *</label>
                        <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="off"
                        placeholder="Digite o seu nome"
                        autoFocus
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email *</label>
                        <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="off"
                        placeholder="Digite o seu email"
                        />
                    </div>
                    <div>
                        <label htmlFor="nascimento">Data de Nascimento *</label>
                        <input 
                        type="date"
                        required
                        id="nascimento" 
                        value={nascimento}
                        onChange={(e) => setNascimento(e.target.value)}
                        />
                    </div>

                    <div>
                        <h3>Endereço</h3>
                    </div>

                    <div>
                        <label htmlFor="cep">CEP *</label>
                        <input 
                        type="text" 
                        id="cep"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        required
                        autoComplete="off"
                        maxLength={8}
                        minLength={8}
                        placeholder={"Digite seu CEP"}
                        />
                    </div>

                    <div>
                        <label htmlFor="cidade">Cidade *</label>
                        <input 
                        type="text" 
                        id="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="estado">Estado *</label>
                        <input 
                        type="text"
                        id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="logradouro">Endereço *</label>
                        <input 
                        type="text" 
                        id="logradouro"
                        value={logradouro}
                        onChange={(e) => setLogradouro(e.target.value)}
                        required
                    />
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro *</label>
                        <input 
                        type="text" 
                        id="bairro"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="complemento">Complemento</label>
                        <input 
                        type="text"
                        id="complemento"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                        />
                    </div>
                <div>
                    <input type="submit" value="Revisar Pedido" onSubmit={handleSubmit}/>
                </div>

            </form>

        </div>

    )

}

export default Form