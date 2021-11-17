import styled from "styled-components";
import { Container } from "../../../globalStyles";


export const Entry = styled.div`
display: flex;
margin: 0;
flex-wrap: wrap;
align-items: center;
`

export const ImageCont = styled.div`
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


export const Img = styled.img`
max-width: 100%;
height: 70px;
width: 70px;
vertical-align: middle;
display: inline-block;
max-height: 70px;
`;