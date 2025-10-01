import Card from "./Card";
import type { Product } from "../types/Product";

function CardGrid({ products }: { products: Product[] }) {
    return (
        <>
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
        </>
    );
}

export default CardGrid;
