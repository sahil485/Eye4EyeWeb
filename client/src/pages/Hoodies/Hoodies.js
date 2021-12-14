import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { imObjTwo, infoObjTwo } from '../Data'

const Hoodies = () => {
    return (
        <>
            <ImageSection {...imObjTwo}/>
            {/* <InfoSection {...infoObjTwo}/> */}
        </>
    )
}

export default Hoodies
