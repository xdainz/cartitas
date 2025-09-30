import Card from "./Card";
import JsonProducts from "../hooks/JsonProduct";

const productList = JsonProducts;

function CardGrid() {
    return (
        <>
            {productList.map((product) => (
                <Card
                    id={product.id}
                    category={product.category}
                    name={product.name}
                    brand={product.brand}
                    price={product.price}
                    image={product.image}
                    desc={product.desc}
                />
            ))}
        </>
    );
}

export default CardGrid;
