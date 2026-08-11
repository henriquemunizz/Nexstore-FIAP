
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
}

export function Products() {
    
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data: Product[]) => {

    return (

        <div>
            <h3>Title</h3>
        </div>

    )
}