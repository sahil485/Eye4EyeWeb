import styled from "styled-components";

export const Checkout = styled.div`
margin-top: 20px;
margin-bottom: 20px;
margin-right: 100px;
margin-left: 100px;
background: #fff;
display: flex;
justify-content: center;
`

export const ItemsCont = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
`

export const WideCheckoutColumn = styled.div`
justify-content: center;
width: 65%;
@media screen and (max-width: 768px){
    width:100%;
    justify-content: center;
}

`

export const NarrowCheckoutColumn = styled.div`
justify-content: center;
width: 35%;
@media screen and (max-width: 768px){
    width:100%;
    justify-content: center;
}

`