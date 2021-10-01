import React, { useEffect, useState } from 'react';
import Shop from './shop/Shop';

const Shopping = () => {
    const [shopping, setShopping] = useState([]);

    useEffect(()=>{
        fetch("./shopping.json")
        .then(res => res.json())
        .then(data => setShopping(data))
    },[])
    return (
        <div>
            <h1>My Shop</h1>
            {
                shopping.map(shop =><Shop 
                key = {shop._id}
                shop = {(shop)}
                ></Shop>)
            }
        </div>
    );
};

export default Shopping;