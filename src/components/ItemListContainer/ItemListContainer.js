import './ItemListContainer.css';
import Titles from '../Titles/Titles.js'
import Card from '../Card/Card';


function ItemListContainer() {
    return(
        <>

            <Titles title= 'Productos' />
            <Card product= 'Argentina (Home)' img = 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d88ae2138faf49be8f74aeca012c62eb_9366/camiseta-titular-argentina-22-messi.jpg' price= '50' stock= '20' />
            <Card product= 'River Plate (Home)' img = 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c575c83727034ae0ab92ae930160813b_9366/camiseta-local-river-plate-21-22.jpg' price= '35' stock= '15' />
            <Card product= 'Man. United (Home)' img = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edc50f58129041be80b2ae29011a3119_9366/Manchester_United_22-23_Home_Jersey_Red_H64049_01_laydown.jpg' price= '60' stock= '15' />
            <Card product= 'Juventus (Home)' img = 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/94d953c8a08e460c8095aea000fca906_9366/camiseta-de-titular-juventus-22-23.jpg' price= '50' stock= '12' />
            <Card product= 'Boca Juniors (Home)' img = 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a7d6fa0280d4d7fabedaec20122a6fe_9366/camiseta-titular-boca-juniors-22-23.jpg' price= '40' stock= '9' />
            <Card product= 'Real Madrid (Home)' img = 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a83a28f26a5a41809796ad1600955394_9366/camiseta-local-real-madrid-20-21.jpg' price= '60' stock= '17' />
            <Card product= 'Argentina' img = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64eccaf42b4a46bcbe03aad400d4d04f_9366/Campera_Presentacion_Argentina_(UNISEX)_Negro_FH8594_01_laydown.jpg' price= '65' stock= '13' />
            <Card product= 'Germany ' img = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d440f50ef0634156a3e7ad7b0068736d_9366/Germany_Winter_Jacket_Turquoise_GK8642_01_laydown.jpg' price= '40' stock= '4' />
            <Card product= 'Belgium' img = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d50c251be37b4011b2bdaec90088e14c_9366/Belgium_MYSHELTER_Jacket_White_HE1438_01_laydown.jpg' price= '60' stock= '5' />
            <Card product= 'Juventus' img = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/75a72a5d5cc647d789a5adde01448191_9366/Juventus_Anthem_Track_Top_Black_H67135_01_laydown.jpg' price= '50' stock= '7' />
            <Card product= 'Arsenal' img = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c69e2bc1b3844083b356ae9901312030_9366/Arsenal_Windbreaker_Black_HF4027_01_laydown.jpg' price= '40' stock= '12' />
            <Card product= 'Ajax' img = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98f40c818515435a8f9fae3500fa39bf_9366/Ajax_Amsterdam_Condivo_22_Winter_Jacket_Red_H58257_01_laydown.jpg' price= '60' stock= '5' />

        </>
    )}

export default ItemListContainer;