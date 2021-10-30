import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { imObjOne, imObjTwo, imObjThree, infoObjOne, infoObjTwo, infoObjThree } from '../Data'

const Tshirts = () => {
    return (
        <>
            <ImageSection {...imObjThree}/>
            <InfoSection {...infoObjThree}/>
        </>
    )
}

export default Tshirts
