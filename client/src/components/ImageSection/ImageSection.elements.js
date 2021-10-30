import styled from 'styled-components';

export const ImageSec = styled.div`
color: #fff;
padding: 60px 0;
background: ${({ lightBg }) => (lightBg ? 'DimGray' : '#101522')};

`

export const ImageRow = styled.div`
display: flex;
margin: 0;
flex-wrap: wrap;
align-items: center;
`

export const ImageColumn = styled.div`
margin-bottom: 0px;
padding-right: 0px;
padding-left: 0px;
flex: 1;
max-width: 33%;
flex-basis: 50%;

@media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`

export const ImgWrapper = styled.div`
max-width: 400px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
height: 400px;
width: 400px;
vertical-align: middle;
display: inline-block;
max-height: 700px;
`;