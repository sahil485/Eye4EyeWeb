import styled from "styled-components";


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
    display: flex;
    justify-content: center;
}
`


export const Img = styled.img`
max-width: 100%;
height: 120px;
width: 120px;
vertical-align: middle;
display: inline-block;
`;

export const InfoCont = styled.div`
flex: 1;
max-width: 67%;
flex-basis: 50;
@media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
}
`

export const InfoRow = styled.div`
text-align: left;
width: 100%;
height: 20%;
`

export const Dec = styled.button`
height: auto; 
border-color: red;
border-radius: 30px;
cursor: pointer;
background-color: red;
`

export const Inc = styled.button`
height: auto; 
border-color: green;
border-radius: 30px;
cursor: pointer;
background-color: green;
`