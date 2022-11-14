import "./loading.css"
import loading from "../../assets/images/loading.gif";

const Loading = () => {

    return (

        <div className="Loading">
            <h2>Carregando!</h2>
            <img src={loading} alt="Carregando"/>
        </div>


    )

}

export default Loading