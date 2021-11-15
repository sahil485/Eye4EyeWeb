import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../../globalStyles";

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
                        Greetings of the day
                    </Typography>
                    <Typography variant="h5" component="h2">
                        How are you ?
                    </Typography>
                    <img src={props.link}/>
                    <Typography
                        style={{
                        marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                    <Typography variant="body2" component="p">
                        Stay Happy
                    </Typography>
                    <Button>Purchase</Button>
                </CardContent></center>
            </Card>
            </div>
        </>
    )
}

export default ProductCard