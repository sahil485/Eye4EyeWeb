import React from 'react'
import { CollageSec, WideCollageColumn, NarrowCollageColumn, NarrowColumnCont1, NarrowColumnCont2, Img} from './collage.elements'

function Collage({ img }) {
    return(
        <>
            {/* <CollageSec>
                <WideCollageColumn>
                    <Img src={require('../../images/SliderIms/1.JPG').default}/>
                </WideCollageColumn>
                <NarrowCollageColumn>
                    <NarrowColumnCont1>
                        <Img src={require('../../images/SliderIms/2.JPG').default}/>
                    </NarrowColumnCont1>
                    <NarrowColumnCont1>
                        <Img src={require('../../images/SliderIms/3.JPG').default}/>
                    </NarrowColumnCont1>
                </NarrowCollageColumn>
            </CollageSec> */}
            <CollageSec>
                <Img src = {img}/>
            </CollageSec>
        </>
    )
}

export default Collage