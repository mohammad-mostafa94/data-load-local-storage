import React from 'react';
import { addToDatabase, removeToDatabase } from '../utilities/FakeDataBase';

const Shop = (props) => {
    const {name, email,gender,_id,balance} = props.shop;

    const handlePurchase= (id) =>{
        addToDatabase(id);
    }
    const handleRemove= (id) =>{
        removeToDatabase(id);
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Email: {email}
            </h3>
            <h4>Balance: ${balance}</h4>
            <h4>Gender: {gender}</h4>
            <p><small>ID: {_id}</small></p>
            <button onClick={()=> handlePurchase(_id)}>Purchase</button>
            <button onClick={()=> handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Shop;