import './Item.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link } from 'react-router-dom';

function Item(props) {

    let urlDetail = `/detalle/${props.id}`
    return(
        <div className='card'>
            <h4>{props.product}</h4>
            <img alt="Imagen de Producto" src= {props.img} />
            <p>${props.price}</p>
            <Link to={urlDetail}>
            <button className='Details' >Detalles</button>
            </Link>


            {/* <Contador stock={props.stock}/>
            <button className='addToCart'>Add to cart</button> */}
        </div>
    )}

export default Item;