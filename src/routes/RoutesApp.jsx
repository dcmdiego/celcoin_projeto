import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import InicioPage from "../pages/InicioPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import CarrinhoPage from "../pages/CarrinhoPage";
import RevisaoPage from "../pages/RevisaoPage";

const RoutesApp = () => {

    return (
            <Router>
                <Routes>
                    <Route path="/" element={<InicioPage/>} />
                    <Route path="produtos" element={<ProductsPage/>}/>
                    <Route path="produto/:produtoId" element={<ProductPage/>}/>
                    <Route path="carrinho" element={<CarrinhoPage/>}/>
                    <Route path="revisao" element={<RevisaoPage/>}/>
                    <Route path="*" element={<h1>Tela não existe</h1>}/>
                </Routes>
            </Router>
    )

}

export default RoutesApp;