   const products = [
    {
        id: 1,
        title: 'Argentina (Home)',
        price: 50 ,
        stock: 3 ,
        category: 'Jersey',
        img:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d88ae2138faf49be8f74aeca012c62eb_9366/camiseta-titular-argentina-22-messi.jpg',
    },
    {
        id: 2,
        title: 'River Plate (Home)',
        price: 35 ,
        stock: 3 ,
        category: 'Jersey',
        img:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c575c83727034ae0ab92ae930160813b_9366/camiseta-local-river-plate-21-22.jpg',
    },
    {
        id: 3,
        title: 'Man. United (Home)',
        price: 60 ,
        stock: 3 ,
        category: 'Jersey',
        img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edc50f58129041be80b2ae29011a3119_9366/Manchester_United_22-23_Home_Jersey_Red_H64049_01_laydown.jpg',
    },
    {
        id: 4,
        title: 'Juventus (Home)',
        price: 50 ,
        stock: 3 ,
        category: 'Jersey',
        img:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/94d953c8a08e460c8095aea000fca906_9366/camiseta-de-titular-juventus-22-23.jpg',
    },
    {
        id: 5,
        title: 'Boca Juniors (Home)',
        price: 40 ,
        stock: 3 ,
        category: 'none',
        img:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a7d6fa0280d4d7fabedaec20122a6fe_9366/camiseta-titular-boca-juniors-22-23.jpg',
    },
    {
        id: 6,
        title: 'Real Madrid (Home)',
        price: 60 ,
        stock: 3 ,
        category: 'Jersey',
        img:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a83a28f26a5a41809796ad1600955394_9366/camiseta-local-real-madrid-20-21.jpg',
    },
    {
        id: 7,
        title: 'Argentina',
        price: 65 ,
        stock: 3 ,
        category: 'Jacket',
        img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64eccaf42b4a46bcbe03aad400d4d04f_9366/Campera_Presentacion_Argentina_(UNISEX)_Negro_FH8594_01_laydown.jpg',
    },
    {
        id: 8,
        title: 'Germany',
        price: 40 ,
        stock: 3 ,
        category: 'Jacket',
        img:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/94d953c8a08e460c8095aea000fca906_9366/camiseta-de-titular-juventus-22-23.jpg',
    },
    {
        id: 9,
        title: 'Belgium',
        price: 60 ,
        stock: 3 ,
        category: 'Jacket',
        img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d50c251be37b4011b2bdaec90088e14c_9366/Belgium_MYSHELTER_Jacket_White_HE1438_01_laydown.jpg',
    },
    {
        id: 10,
        title: 'Juventus',
        price: 50 ,
        stock: 3 ,
        category: 'Jacket',
        img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/75a72a5d5cc647d789a5adde01448191_9366/Juventus_Anthem_Track_Top_Black_H67135_01_laydown.jpg',
    },
    {
        id: 11,
        title: 'Arsenal',
        price: 40 ,
        stock: 3 ,
        category: 'Jacket',
        img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c69e2bc1b3844083b356ae9901312030_9366/Arsenal_Windbreaker_Black_HF4027_01_laydown.jpg',
    },
    {
        id: 12,
        title: 'Ajax',
        price: 60 ,
        stock: 3 ,
        category: 'Jacket',
        img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98f40c818515435a8f9fae3500fa39bf_9366/Ajax_Amsterdam_Condivo_22_Winter_Jacket_Red_H58257_01_laydown.jpg',
    },
];



export default function getItemsFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export function getSingleItem(idParams) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let itemRequested = products.find((item) => item.id === parseInt(idParams));

            if (itemRequested) {
                resolve(itemRequested);
            } else {
                reject(new Error('El item no existe.'))
            }
        }, 2000);
    });
    
}
