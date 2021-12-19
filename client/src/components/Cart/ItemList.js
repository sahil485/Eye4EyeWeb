import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context'
import { Item } from './Item/Item.js'

export const ItemList = (props) => {

    const { items }  = useContext(AppContext)

    const nonZeroes = items.filter(item => item.quantity > 0)

    return (
        <>
            {nonZeroes.map(item => (<Item id = {item.id}/>))}
            { items[0].quantity == 0 && items[1].quantity == 0 && items[2].quantity == 0 && <p>No items added to cart!</p> }
        </>
    )
}