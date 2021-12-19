import React from 'react';
import ProductCard from './ProductCards/ProductCard'
import { Grid, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    heading: {
        fontFamily: "sans serif",
        fontSize: "30px"
    }
})

export const ImageSection = ({imgStart, start, img1, img2, img3, alt}) => {

    const classes = useStyles();

    return (
            <Box bgcolor={"#DCDCDC"} p ={2}>

                <Grid container spacing = {10} >
                    <Grid item xs={12} sm={12} md = {12} lg = {12}>
                        <p className={classes.heading}>Sweatshirts (3)</p>
                    </Grid>

                    <Grid item xs={12} sm={12} md = {6} lg = {4}>
                        <ProductCard link = {img1} price={"$35.00"} name={"Midnight Blue and Purple"} id ={1}/>
                    </Grid>

                    <Grid item xs={12} sm={12} md = {6} lg = {4}>
                        <ProductCard link = {img2} price={"$35.00"} name={"White and Red"} id={2}/>
                    </Grid>

                    <Grid item xs={12} sm={12} md = {6} lg = {4}>
                        <ProductCard link = {img3} price={"$35.00"} name={"Forest Green"} id={3}/>
                    </Grid>
                </Grid>
            </Box>
    )
}
