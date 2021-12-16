import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../../globalStyles";
import "./styles.css"
import { AppContext } from "../../../Context";

import { Grid,makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    photo:{
        height: "300px",
        width: "300px"
    }
})

const ProductCard = (props) => {

    const { dispatchCartActions } = useContext(AppContext);
    

    const handleAddToCart = () =>
    {
        dispatchCartActions({name: props.name, quantity: 1}, "ADD", 1)
    }

    const classes = useStyles();

    return (
        <>
            <div>
            <Card variant = "outlined"
                style={{
                    backgroundColor: "white"
                }}
            >
                <center><CardContent>   
                    <div className={classes.background}><img className = {classes.photo} src={props.link}/></div>
                    <Typography
                        style={{ fontSize: 14}}
                        color="textSecondary"
                        gutterBottom
                    >
                    
                    </Typography>
                    <Typography style={{
                        fontFamily: "Gadget"
                        }}
                        variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography
                        style={{
                        marginBottom: 12,
                        fontFamily: "cursive"
                        }}
                        color="textSecondary"
                    >
                        {props.sizes}
                    </Typography>
                    <Typography style={{
                        fontFamily: "cursive"
                        }}
                        variant="body2" component="p">
                        {props.price}
                    </Typography>
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                </CardContent></center>
            </Card>
            </div>
        </>
    )
}

export default ProductCard