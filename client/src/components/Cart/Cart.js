import React, { useContext, useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { Checkout, WideCheckoutColumn, NarrowCheckoutColumn, ItemsCont } from './elements.cart';
import { AppContext } from '../../Context'
import { Grid, makeStyles } from '@material-ui/core'

function Cart() {

    const { items } = useContext(AppContext);
    const [price, setPrice] = useState(items[0].price*items[0].quantity + items[1].price*items[1].quantity+ items[2].price*items[2].quantity);

    return (
        <>
            <Grid container m ={10} spacing ={10} justifyContent='center'>
                {/* <Grid item xs={3} sm={3} md = {3} lg={3}/> */}
                <Grid item xs={9} sm = {9} md = {4} lg = {4}>
                        <u><h2>Cart</h2></u>
                        <br/>
                        <br/>
                        <ItemList price = {price} update = {setPrice}/>
                </Grid>

                {/* <Grid item lg={0} md ={0}/> */}

                <Grid item xs = {9} sm = {9} md = {4} lg = {4} container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <u><h2>Summary</h2></u>
                            <br/>
                        </Grid>

                        <Grid item xs={9} sm={9} md={9} lg={9}>
                            <p>Subtotal: </p>
                            <br/>
                        </Grid>

                        <Grid item xs={1} sm={1} md={1} lg={1}> 
                            <p>${price}.00</p>
                            <br/>
                        </Grid>

                        <Grid item xs={9} sm={9} md={9} lg={9}>
                            <p>Estimated Shipping and Handling: </p>
                            <br/>
                        </Grid>

                        <Grid item xs={1} sm={1} md={1} lg={1}>
                            <p>$0.00</p>
                            <br/>
                        </Grid>

                        <Grid item xs={9} sm={9} md={9} lg={9}>
                            <p>Estimated Tax: </p>
                            <br/>
                        </Grid>

                        <Grid item xs={1} sm={1} md={1} lg={1}>
                            <p>$0.00</p>
                            <br/>
                        </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Cart
