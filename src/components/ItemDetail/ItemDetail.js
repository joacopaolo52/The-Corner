import { useState } from 'react';
import './ItemDetail.css'

function ItemDetail(props) {

    // const [Detail, setDetail] = useState({display: 'none'});


    // function click() {
    //     setDetail({display: 'flex' })
    // }
    
    // function cerrar() {
    //     setDetail({display: 'none' })
    // }

    return(
        <>
{/* 
            <button className='Details' onClick={click} >Detalles</button> */}
            
            {/* <div style={Detail} className='detailContent'> */}
            <div  className='detailContent'>
                {/* <h4 onClick={cerrar}>X</h4> */}
                <div>
                    <img src={props.url}></img>
                    <h4>X</h4>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )}

export default ItemDetail;