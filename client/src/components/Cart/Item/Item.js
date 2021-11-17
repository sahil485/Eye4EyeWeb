import React from 'react'
import { Entry, ImageCont, Img } from './elements.item'

export const Item = (props) => {
    return (
        <>
            <Entry>
                <ImageCont>
                    <Img src = {require('../../../images/Png/Sweatshirts/1OF3Front.png').default}/>
                </ImageCont>
                <h4>{props.name}</h4>  
            </Entry>
        </>
    )
}
