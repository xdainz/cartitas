import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

function Card(product: Product) {
    return (
        <>
            <div className="p-1">
                <div className="col">
                    <div className="card product-card">
                        <Link
                            className="card-link"
                            to={
                                "/Productos/" +
                                product.category +
                                "/" +
                                product.id
                            }
                        >
                            <img
                                className="card-img-top"
                                src={product.image}
                                alt={product.name + "image"}
                            ></img>
                            <div className="card-body text-center">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text subtext">
                                    {product.brand}
                                </p>
                                <p className="card-text price">
                                    ${product.price}
                                </p>
                                <button className="btn btn-primary add-to-cart">
                                    Agregar al carrito
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
