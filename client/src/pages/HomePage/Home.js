import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { imObjOne, imObjTwo, imObjThree, infoObjOne, infoObjTwo, infoObjThree } from '../Data'

const Home = () => {
    return (
        <>
            <ImageSection {...imObjOne}/>
            <InfoSection {...infoObjOne}/>
            <ImageSection {...imObjTwo}/>
            <InfoSection {...infoObjTwo}/>
            <ImageSection {...imObjThree}/>
            <InfoSection {...infoObjThree}/>
        </>
    )
}

export default Home
