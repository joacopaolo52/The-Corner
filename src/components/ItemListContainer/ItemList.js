import Item from "../Item/Item";
import { Link } from "react-router-dom";


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
                >

                    <Link to={product.id}>
                        <button className='Details' >Detalles</button>
                    </Link>

                </Item>
            ))}
        </>
    )
 }

 export default ItemList;