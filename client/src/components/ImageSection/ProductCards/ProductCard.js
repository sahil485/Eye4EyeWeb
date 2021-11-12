import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../../globalStyles"
import CardActions from "@material-ui/core/CardActions";

const ProductCard = () => {
    return (
        <>
            <div style={{}}>
            <Card variant = "outlined"
                style={{
                width: 400,
                backgroundColor: "beige",
                }}
            >
                <CardContent>   
                    <CardMedia
                        component="img"
                        height="194"
                        image="./images/im.jpg"
                        alt="Paella dish"
                    />
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
                </CardContent>
                <CardActions>
                    <Button size="small">Purchase</Button>
                </CardActions>
            </Card>
            </div>
        </>
    )
}

export default ProductCard