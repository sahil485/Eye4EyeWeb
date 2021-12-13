import React from 'react'
import { InfoSection } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import Collage from '../../components/Collage/Collage';
import {collageObjOne, imObjOne, imObjTwo, imObjThree, infoObjOne, infoObjTwo, infoObjThree } from '../Data'

const Home = () => {
    return (
        <>
            {/*<ImageSection {...imObjOne}/>*/}
            <InfoSection {...infoObjOne}/>
            {/*<ImageSection {...imObjTwo}/>*/}
            <Collage {...collageObjOne}/>
            <ImageSection {...imObjOne}/>   
            <InfoSection {...infoObjTwo}/>
            {/*<ImageSection {...imObjThree}/>
            <InfoSection {...infoObjThree}/>*/}
        </>
    )
}

export default Home
