import type { Product } from "../types/Product";
import productApi from "../data/products.json";

const JsonProducts: Product[] = productApi.map((product: Product) => ({
    id: product.id,
    category: product.category || "null",
    stock: product.stock || 0,
    name: product.name || "null",
    brand: product.brand,
    price: product.price,
    image: product.image || "null",
    desc: product.desc,
}));

export default JsonProducts;
