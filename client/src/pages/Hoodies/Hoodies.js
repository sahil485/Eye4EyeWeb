import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { imObjTwo, homeObjThree } from './Data'

const Hoodies = () => {
    return (
        <>
            <ImageSection {...imObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Hoodies
