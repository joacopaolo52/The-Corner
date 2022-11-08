import '../ItemDetail/ItemDetail.css'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import  { getSingleItem } from '../data/mockService';


function ItemDetailContainer() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getSingleItem().then((products) => {
            console.log('now', products);
            setProduct(products);
        });
    }, [0]);


   return(
       <>
       <ItemDetail
            title={product.title}
            url={product.img}

       />

       </>
   )}


export default ItemDetailContainer;