import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { imObjOne, imObjTwo, imObjThree, homeObjOne, homeObjThree, homeObjFour } from './Data'

const Home = () => {
    return (
        <>
            <ImageSection {...imObjOne}/>
            <InfoSection {...homeObjOne}/>
            <ImageSection {...imObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <ImageSection {...imObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
