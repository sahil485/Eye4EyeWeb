import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../../globalStyles";
import "./styles.css"
import { AppContext } from "../../../Context";
import { CardHeader } from "@material-ui/core";

const ProductCard = (props) => {

    const { dispatchCartActions } = useContext(AppContext);

    const handleAddToCart = () =>
    {
        dispatchCartActions({name: props.name, quantity: 1}, "ADD")
    }

    return (
        <>
            <div style={{}}>
            <Card variant = "outlined"
                style={{
                width: 400,
                backgroundColor: "green"
                }}
            >
                <center><CardContent>   
                    <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    >
                    
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <img className = "photo" src={props.link}/>
                    <Typography
                        style={{
                        marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        {props.sizes}
                    </Typography>
                    <Typography variant="body2" component="p">
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