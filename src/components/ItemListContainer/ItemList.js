import Item from "../Item/Item";


 function ItemList(props) {
    return(
        <>
        {props.productsList.map((product) => (
                <Item
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    stock={product.stock}
                    img={product.img}     
                />
            ))}
        </>
    )
 }

 export default ItemList;