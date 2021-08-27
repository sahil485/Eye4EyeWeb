import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { imObjOne, imObjTwo, imObjThree, homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Clothing = () => {
    return (
        <>
            <ImageSection {...imObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <ImageSection {...imObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Clothing