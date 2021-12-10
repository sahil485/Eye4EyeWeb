import React, { useContext, useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { Checkout, WideCheckoutColumn, NarrowCheckoutColumn, ItemsCont } from './elements.cart';
import { AppContext } from '../../Context'

function Cart() {

    const { items } = useContext(AppContext);

    const [price, setPrice] = useState(items[0].price*items[0].quantity + items[1].price*items[1].quantity+ items[2].price*items[2].quantity);

    return (
        <>
            <Checkout>
                <WideCheckoutColumn>
                    
                    <ItemsCont>
                    
                        <NarrowCheckoutColumn>
                        </NarrowCheckoutColumn>
                        
                        <WideCheckoutColumn>
                            <u><h2>Cart</h2></u>
                            <br/>
                            <br/>
                            <ItemList price = {price} update = {setPrice}/>
                        </WideCheckoutColumn>
                        
                    </ItemsCont>

                </WideCheckoutColumn>

                <NarrowCheckoutColumn>
                    <u><h2>Summary</h2></u>
                    <br/>
                    <br/>
                    <ItemsCont>
                        <WideCheckoutColumn>
                            <p>Subtotal: </p>
                            <br/>
                            <p>Estimated Shipping and Handling: </p>
                            <br/>
                            <p>Estimated Tax: </p>
                            <br/>
                        </WideCheckoutColumn>
                        <NarrowCheckoutColumn>
                            <p>${price}.00</p>
                            <br/>
                            <p>$0.00</p>
                            <br/>
                            <p>$0.00</p>
                            <br/>
                        </NarrowCheckoutColumn>
                    </ItemsCont>
                </NarrowCheckoutColumn>

            </Checkout>
        </>
    )
}

export default Cart
