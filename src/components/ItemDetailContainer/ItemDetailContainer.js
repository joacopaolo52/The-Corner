import '../ItemDetail/ItemDetail.css'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import  { getSingleItem } from '../data/mockService';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    let params= useParams();
    let id = params.id;

    useEffect(() => {
        console.log(id)
        getSingleItem(id).then((products) => {
            setProduct(products);
        });
    }, []);


   return(
       <>
       <ItemDetail
            title={product.title}
            url={product.img}
            id={product.id}

       />

       </>
   )}


export default ItemDetailContainer;