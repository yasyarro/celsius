import React, { useState, useEffect } from 'react';
import Item from './Item';
import ItemData from './json/Items.json';



const ItemList = () => {
    const [items, setItems] = useState ([]);
    console.log(items);
    

    useEffect( ()=>{
            const promList = new Promise ((resolve) =>{
                setTimeout (()=>{
                    resolve(ItemData);
                },2000);
            });

            promList.then((response) => {
                setItems(response);
            });
        }, []);
        
    return (
        <div className="itemsList">
            {items.map((item)=> {
                return (
                <Item item={item} key={item.id} />
                )
            })}
        </div>
    )
};

export default ItemList;