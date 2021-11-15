import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../../globalStyles";
import "./styles.css"

const ProductCard = (props) => {
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
                        Type of Clothing
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Name
                    </Typography>
                    <img className = "photo" src={props.link}/>
                    <Typography
                        style={{
                        marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        Sizes Selection
                    </Typography>
                    <Typography variant="body2" component="p">
                        Price
                    </Typography>
                    <Button>Purchase</Button>
                </CardContent></center>
            </Card>
            </div>
        </>
    )
}

export default ProductCard