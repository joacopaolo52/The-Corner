import './Card.css';
import Contador from '../Contador/Contador';

function Card(props) {
    return(
        <div className='card'>
            <h4>{props.product}</h4>
            <img alt="Imagen de Producto" src= {props.img} />
            <p>${props.price}</p>
            <Contador stock={props.stock}/>
            {/* <h6>{props.type}</h6> */}
        </div>
    )}

export default Card;