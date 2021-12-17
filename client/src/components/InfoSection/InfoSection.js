import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles';
import { Slider } from '../ImageSlider/Slider'

import { Grid, Box, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    topLine: {
        fontSize: "18px",
        lineHeight: "16px",
        letterSpacing: "1.4px",
        marginBottom: "16px"
    },
    heading:{
        marginBottom: "24px",
        fontSize: "48px",
        lineHeight: "1.1"
    },
    subtitle:{
        maxWidth: "440px",
        marginBottom: "35px",   
        fontSize: "18px",
        lineHeight: "24px"
    }
})

const InfoSection = ({ buttonLabel, description, headline, topLine, primary, to, images }) => {

    const classes = useStyles();
    const theme = useTheme();
    const showSlider = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <>
            <Box bgcolor={"pink"} p={5}>
                    <Grid item container 
                        xs={12}
                        spacing = {10} 
                        justifyContent='center'
                        alignItems='center'>


                        <Grid item xs={12} sm= {12} md={12} lg={2}>
                            <div className = {classes.topLine}>{topLine}</div>
                            <h1 className={classes.heading}> {headline} </h1>
                            <p className = {classes.subtitle}>{description}</p>
                            <Link to={to}>
                                {buttonLabel &&<Button big fontBig primary = {primary}>
                                {buttonLabel}
                                </Button>}
                            </Link>
                        </Grid>

                        {showSlider && 
                        <>
                        <Grid item xs={0} sm={0} md={0} lg={3}/>

                        <Grid item xs={0} sm={0} md={0} lg={3} xl={4}>
                            <Slider images = {images}/>
                        </Grid>
                        </>
                        }

                    </Grid>
            </Box>


        </>
    )
}

export default InfoSection
