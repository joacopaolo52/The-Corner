import { useState } from 'react';
import './ItemDetail.css'

function ItemDetail({Texto, Title}) {

    const [Detail, setDetail] = useState({display: 'none'});


    function click() {
        setDetail({display: 'flex' })
    }
    
    function cerrar() {
        setDetail({display: 'none' })
    }

    return(
        <>

            <button className='Details' onClick={click} >Detalles</button>
            
            <div style={Detail} className='detailContent'>
                <h4 onClick={cerrar}>X</h4>
                <div>
                    <h3>{Title}</h3>
                    <p>{Texto}</p>
                </div>
            </div>
        </>
    )}

export default ItemDetail;