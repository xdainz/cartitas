import Card from "./Card";
import type { Product } from "../types/Product";

function CardGrid({ products }: { products: Product[] }) {
    return (
        <div className="col-sm-12 col-md-8 row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            {products.map((product, index) => (
                <Card
                    id={product.id}
                    category={product.category}
                    name={product.name}
                    brand={product.brand}
                    price={product.price}
                    image={product.image}
                    desc={product.desc}
                    key={index}
                />
            ))}
        </div>
    );
}

export default CardGrid;
