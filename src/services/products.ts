import type { Product } from "../types/products";

export function getProducts(): Promise<Product[]>{

    const response = fetch('https://fakestoreapi.com/products')
        .then((data) => {
            return data.json()
        })

    return response
}