import './Item.css';
import Contador from '../Contador/Contador';
import ItemDetail from '../ItemDetail/ItemDetail';

function Item(props) {
    return(
        <div className='card'>
            <h4>{props.product}</h4>
            <img alt="Imagen de Producto" src= {props.img} />
            <p>${props.price}</p>
            {/* <Contador stock={props.stock}/>
            <button className='addToCart'>Add to cart</button> */}
            <ItemDetail />
        </div>
    )}

export default Item;