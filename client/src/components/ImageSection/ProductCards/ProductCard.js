import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const ProductCard = () => {
    return (
        <>
            <div style={{}}>
            <h4>How to use CardComponent in ReactJS?</h4>
            <Card
                style={{
                width: 400,
                backgroundColor: "yellow",
                }}
            >
                <CardContent>
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
                <Button size="small">Stay Safe.....</Button>
                </CardActions>
            </Card>
            </div>
        </>
    )
}

export default ProductCard