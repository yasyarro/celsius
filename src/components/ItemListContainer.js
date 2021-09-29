import './ItemListContainer.css'
import './ItemCount/ItemCount'
import ItemCount from './ItemCount/ItemCount'
import React from 'react'


export default function ItemListContainer (props){
    return(
        <>
        
            <h1 className='saludo'>Compra! {props.name}</h1>
           
            <p><ItemCount/></p>
        </>
        
    )
}



