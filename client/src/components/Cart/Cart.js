import React, { useContext, useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { AppContext } from '../../Context'
import { Grid } from '@material-ui/core'

function Cart() {

    const { price } = useContext(AppContext);

    return (
      <>
        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={9} sm={9} md={4} lg={4}>
            <h2>
              <u>Cart</u>
            </h2>
            <br />
            <br />
            <ItemList/>
          </Grid>
  
          <Grid item xs={9} sm={9} md={4} lg={4}>
            <u>
              <h2>Summary</h2>
            </u>
            <br />
            <p>Subtotal: ${price}.00</p>
            <br />
            <p>Estimated Shipping and Handling: $0.00</p>
            <br />
            <p>Estimated Tax: $0.00</p>
            <br />
          </Grid>
        </Grid>
      </>
    );
}

export default Cart
