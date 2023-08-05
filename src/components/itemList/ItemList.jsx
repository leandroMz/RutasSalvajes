import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
    return (
        <>
            <h2>Nuestros Servicios</h2>
            <h3>Explorar paisajes y la adrenalina de momentos inolvidables</h3>
            <div className="orderItems">
                {products.map((product) => (
                    <Item
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </div>
        </>
    );
};