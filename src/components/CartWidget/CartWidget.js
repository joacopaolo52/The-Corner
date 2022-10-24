import './CartWidget.css';
import carrito from '../../assets/carrito.png'


function CartWidget() {
    return(
        <><img className='cartWidget' src={carrito} alt='Carrito'></img><p className= 'cantidadCart'>0</p></>
        
    )}

export default CartWidget;