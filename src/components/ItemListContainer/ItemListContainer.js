import './ItemListContainer.css';
import Titles from '../Titles/Titles.js'
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import getItemsFromAPI from '../data/products';
import ItemList from './ItemList';



function ItemListContainer() {

     const [productsList, setProductsList] = useState([]);

     useEffect(() => {
         getItemsFromAPI().then((products) => {
             console.log(products);
             setProductsList(products);
         });
     }, []);


    return(
        <>
        <Titles title= 'Productos' />
        <div className='Container'>

            <ItemList productsList={productsList}/>

        </div>

        </>
    )}

export default ItemListContainer;