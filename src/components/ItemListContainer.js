import './ItemListContainer.css'
import './ItemCount/ItemCount'
import ItemCount from './ItemCount/ItemCount'
import React from 'react'
import ItemList from './ItemList.js'



export default function ItemListContainer (props){
    return(
        <>
        
            <h1 className='saludo'>Compra! {props.name}</h1>
           <p><ItemList/></p>
            <p><ItemCount/></p>
            
        </>
        
    )
}



