import React ,{ useContext, useState, useEffect } from 'react'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'
import { Grid, makeStyles, Box } from '@material-ui/core'
import { AppContext } from '../../../Context'

const useStyle = makeStyles({
    image:{
        maxWidth: "100%",
        height: "120px",
        width: "120px",
        verticalAlign: "middle",
        display: "inline-block",
    },
    head:{
        fontSize:"20px",
        fontWeight: 500
    }
})

export const Item = (props) => {

    const classes = useStyle();
    const { items, dispatchCartActions } = useContext(AppContext);
    const [quant, setQuant] = useState(items[props.id-1].quantity)
    const [changeType, setChangeType] = useState()

    const handleAdd = (e) => {
        e.preventDefault();
        if(items[props.id-1].quantity <5)
        {
            setQuant(items[props.id-1].quantity + 1)
            setChangeType("INCREMENT")
        }
    }

    const handleSubtract = (e) => {
        e.preventDefault();
        if(items[props.id-1].quantity > 0)
        {
            setQuant(items[props.id-1].quantity - 1)
            setChangeType("DECREMENT")
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setQuant(0)
        setChangeType("DELETE")
    }

    useEffect(() => {
        dispatchCartActions(props.id, changeType)
    }, [quant]);

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item container xs = {4}>
                        <img className={classes.image} src = {require(`../../../images/Png/Sweatshirts/${props.id}OF3Front.png`).default}/>
                    </Grid>
                    <Grid item container xs = {8} alignItems='center'>
                        <Grid container item xs={10} justifyContent='left'>
                            <Grid item xs = {12}>
                                <p className={classes.head}>{items[props.id-1].name} Sweatshirt</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p style = {{"fontSize": "12.5px"}} >Quantity: <button onClick={handleSubtract}><FaMinus/></button> <input style = {{"width": "30px"}} value = {items[props.id-1].quantity} readOnly/> <button onClick={handleAdd}><FaPlus/></button></p>
                            </Grid>
                            <Grid item xs = {12}>
                                <p style = {{"fontSize": "12.5px"}}>${items[props.id-1].price*items[props.id-1].quantity}.00</p>
                            </Grid>
                        </Grid>
                        <Grid item xs = {2}>
                            <FaTrash onClick={handleDelete}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}