import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { imObjTwo, infoObjTwo } from '../Data'

const Hoodies = () => {
    return (
        <>
            <InfoSection {...infoObjTwo}/>
            <ImageSection {...imObjTwo}/>
        </>
    )
}

export default Hoodies
