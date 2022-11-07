import { useState } from 'react';
import './Contador.css';

function Contador(props) {

    const [contador, setContador] = useState(1);

    function agregarAlContador() {
        if (contador < props.stock) {
            setContador(contador + 1);
            console.log(contador + 1);
        } else {
            alert('Cantidad Maxima')
        }
    }

    function restarAlContador() {
        if (contador > 1) {
            setContador(contador - 1);
            console.log(contador -1);
        } else {
            alert('Cantidad Minima')
        }
    }

     return(
        <>

        <div className='container'>

            <div className='ItemCount'>

                <button onClick={restarAlContador}>-</button>
                <p className='numero'>{contador}</p>
                <button onClick={agregarAlContador}>+</button>

            </div>
        
        </div>
        </>
     )}

export default Contador;