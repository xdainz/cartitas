import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom-theme.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import Layout from "./layout/Layout";
function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:category" element={<Products />} />
                    <Route path="/:category/:id" element={<ProductPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
