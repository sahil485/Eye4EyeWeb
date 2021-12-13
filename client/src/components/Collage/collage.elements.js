import styled from 'styled-components';

export const CollageSec = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
background: DimGray;
`

export const WideCollageColumn = styled.div`
justify-content: center;
width: 70%;
@media screen and (max-width: 768px){
    width:100%;
    justify-content: center;
}
`

export const NarrowCollageColumn = styled.div`
justify-content: center;
width: 30%;
align-items: center;
@media screen and (max-width: 768px){
    width:100%;
    justify-content: center;
}

`

export const NarrowColumnCont1 = styled.div`
height: 50%;
`

export const Img = styled.img`
max-width: 100%;
max-height: 100%;
`;