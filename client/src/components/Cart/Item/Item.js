import React ,{ useContext, useState, useEffect } from 'react'
import { Entry, ImageCont, Img, InfoCont, InfoRow, Inc, Dec } from './elements.item'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { AppContext } from '../../../Context'

export const Item = (props) => {

    const [quant, setQuant] = useState(props.num)
    const { dispatchCartActions } = useContext(AppContext);
    
    const handleAdd = (e) => {
        e.preventDefault();
        if(quant<5)
        {
            setQuant(quant+1);
            props.update(props.price + 35)
        }
    }

    const handleSubtract = (e) => {
        e.preventDefault();
        if(quant > 0)
        {
            setQuant(quant-1);
            props.update(props.price-35)
        }
    }

    useEffect(() => {
        dispatchCartActions(props.id, "INCREMENT", quant)
    });

    // const handleInput = (e) => {
    //     if(e.target.value>0 && e.target.value<5) setQuant(e.target.value);
    //     else if(e.target.value <0) setQuant(0);
    //     else if(e.target.value > 5) setQuant(5);
    //     else setQuant(e.target.value);
    // }

    // const handleInput = () => {
    //     let e = document.getElementById("amount").value
    //     setQuant(e);
    //     props.update(props.price + 35*quant)
    // }
    // useEffect(() => {
    //     document.getElementById("amount").value = `${quant}`
    //     dispatchCartActions(props.id, "INCREMENT", quant)
    // });

    return (
        <>
            <Entry>
                <ImageCont>
                    <Img src = {require(`../../../images/Png/Sweatshirts/${props.id}OF3Front.png`).default}/>
                </ImageCont>
                <InfoCont>
                    <InfoRow>
                        <h4>{props.name}</h4>
                    </InfoRow>
                    <InfoRow>
                        <p style = {{"font-size": "12.5px"}} >Quantity: <Dec onClick={handleSubtract}><FaMinus/></Dec> <input style = {{"width": "30px"}}value = {quant} /*onChange={e => handleInput(e)}*/ readOnly/> <Inc onClick={handleAdd}><FaPlus/></Inc></p>
                          
                        {/* <p style = {{"font-size": "12.5px"}}> Quantity: <select id="amount" onChange={handleInput}> 
                                                                            <option value="1">1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3">3</option>
                                                                            <option value="4">4</option>
                                                                            <option value="5">5</option>
                                                                        </select></p> */}
                    </InfoRow>
                    <InfoRow>

                    </InfoRow>
                </InfoCont>
            </Entry>
        </>
    )
}