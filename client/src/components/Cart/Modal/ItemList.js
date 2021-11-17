import React, { useContext } from 'react'
import { AppContext } from '../../../Context'
import { Item } from '../Item/Item'
import './elements.modal.css'

export const ItemList = () => {

    const { items }  = useContext(AppContext)

    return (
        <>
            <div className = "container">

                {items.map(item => <Item name = {item.name}/>)}
            </div>
        </>
    )
}
