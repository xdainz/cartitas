import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

function Card(product: Product) {
    return (
        <>
            <div className="box box-product">
                <Link
                    className="box-product-link"
                    to={"/Productos/" + product.category + "/" + product.id}
                >
                    <img
                        className="box-product-img"
                        src={product.image}
                        alt={product.name + "image"}
                    ></img>
                    <div className="box-product-body">
                        <label className="box-product-title">
                            {product.name}
                        </label>
                        <label className="box-product-brand">
                            {product.brand}
                        </label>
                        <label className="box-product-price">
                            ${product.price}
                        </label>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Card;
