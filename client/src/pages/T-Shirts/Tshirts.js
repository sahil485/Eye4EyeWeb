import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { imObjThree, homeObjFour } from './Data'

const Tshirts = () => {
    return (
        <>
            <ImageSection {...imObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Tshirts
