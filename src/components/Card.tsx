import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

function Card(product: Product) {
    return (
        <>
            <div className="px-1 pb-2">
                <Link
                    className="box-product-link"
                    to={"/Productos/" + product.category + "/" + product.id}
                >
                    {" "}
                    <div className="box box-product">
                        <img
                            className="box-product-img"
                            src={product.image}
                            alt={product.name + "image"}
                        ></img>
                        <div className="box-product-body">
                            <h4 className="box-product-title">
                                {product.name}
                            </h4>
                            <p>{product.brand}</p>
                            <p className="box-product-price">
                                ${product.price}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Card;
