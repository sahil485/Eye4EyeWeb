import React, { useContext } from 'react'
import { AppContext } from '../../../Context'
import { Item } from '../Item/Item'
import './elements.modal.css'

export const ItemList = () => {

    const { items }  = useContext(AppContext)

    const nonZeroes = items.filter(item => item.quantity > 0)
    return (
        <>
            <div className = "container">
                {nonZeroes.map(item => (<Item name = {item.name} id = {item.id} num = {item.quantity}/>))}
            </div>
        </>
    )
}
