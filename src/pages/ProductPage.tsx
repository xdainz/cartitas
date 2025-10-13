import { useParams } from "react-router-dom";
import JsonProducts from "../hooks/JsonProduct";

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
            <div className="container">
                <div className="boxes">
                    <div className="product-img">
                        <img
                            className="product-img"
                            src={product.image}
                            alt={product.name + "image"}
                        ></img>
                    </div>

                    <div>
                        <label className="product-title">{product.name}</label>
                        <label className="product-text-muted">
                            {product.brand}
                        </label>
                        <label className="product-text-muted">
                            Stock: {product.stock}
                        </label>
                        <label className="product-price">
                            ${product.price}
                        </label>
                        {product.stock ? (
                            <button className="button">
                                Agregar al carrito
                            </button>
                        ) : (
                            <p className="box">ta agotao</p>
                        )}
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
