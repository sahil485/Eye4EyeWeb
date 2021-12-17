import React ,{ useContext, useState, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Grid, makeStyles, Box } from '@material-ui/core'
import { AppContext } from '../../../Context'

const useStyle = makeStyles({
    image:{
        maxWidth: "100%",
        height: "120px",
        width: "120px",
        verticalAlign: "middle",
        display: "inline-block",
    }
})

export const Item = (props) => {

    const classes = useStyle();

    const [quant, setQuant] = useState(props.num)
    const { dispatchCartActions } = useContext(AppContext);
    
    const handleAdd = (e) => {
        e.preventDefault();
        if(quant<5)
        {
            setQuant(quant+1);
            props.update(props.price + 35)
        }
    }

    const handleSubtract = (e) => {
        e.preventDefault();
        if(quant > 0)
        {
            setQuant(quant-1);
            props.update(props.price-35)
        }
    }

    useEffect(() => {
        dispatchCartActions(props.id, "INCREMENT", quant)
    });

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item container xs = {4}>
                        <img className={classes.image} src = {require(`../../../images/Png/Sweatshirts/${props.id}OF3Front.png`).default}/>
                    </Grid>
                    <Grid item container xs = {8}>
                        <Grid item xs={12}>
                            <h4>{props.name}</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <p style = {{"font-size": "12.5px"}} >Quantity: <button onClick={handleSubtract}><FaMinus/></button> <input style = {{"width": "30px"}}value = {quant} readOnly/> <button onClick={handleAdd}><FaPlus/></button></p>
                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}