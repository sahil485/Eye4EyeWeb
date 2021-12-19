import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    cont:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left"
    },
    image:{
        maxWidth: "100%",
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

})

function Collage({ img }) {
    const classes = useStyles();

    return(
        <>
            <div className={classes.cont}>
                <img className ={classes.image} src = {img}/>
            </div >
        </>
    )
}

export default Collage