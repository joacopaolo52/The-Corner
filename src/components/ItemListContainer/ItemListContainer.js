import './ItemListContainer.css';
import Titles from '../Titles/Titles.js'
import { useEffect, useState } from 'react';
import getItemsFromAPI from '../data/mockService';
import ItemList from './ItemList';



function ItemListContainer() {

     const [productsList, setProductsList] = useState([]);

     useEffect(() => {
         getItemsFromAPI().then((products) => {
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