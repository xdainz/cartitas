import { useParams } from "react-router-dom";
import JsonProducts from "../hooks/JsonProduct";
import Button from "../components/Button";

function ProductPage() {
    const { category, id } = useParams();

    const product = JsonProducts.find(
        (prod) => prod.category === category && prod.id === id
    );

    if (!product)
        return (
            <div className="container text-center py-5">
                <h1>El producto no se ha encontrado :C</h1>
            </div>
        );

    return (
        <>
            <div className="container py-5">
                <div className="boxes">
                    <div className="product-img">
                        <img
                            className="product-img"
                            src={product.image}
                            alt={product.name + "image"}
                        ></img>
                    </div>

                    <div className="">
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-text-muted">{product.brand}</p>
                        <p className="product-text-muted">Stock: {product.stock}</p>
                        <h4 className="product-price">${product.price}</h4>
                        {(product.stock) ? <Button text="Agregar al carrito" /> : <p>ta agotao</p>}
                    </div>
                </div>

                <div className="product-desc">
                    <p>Descripcion producto:</p>
                    <p>{product.desc}</p>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
