import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom-theme.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import Layout from "./layout/Layout";
import NotFound from "./pages/404";
function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Productos" element={<Products />} />
                    <Route path="/Productos/:category" element={<Products />} />
                    <Route
                        path="/Productos/:category/:id"
                        element={<ProductPage />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/*si no encuentra la pag manda 404*/}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
