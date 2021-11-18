import React from 'react'
import './elements.modal.css'
import { Button } from '../../../globalStyles'
import { FaTimes } from 'react-icons/fa'
import { ItemList } from './ItemList'

function Modal({ closeModal }) {

    return (
        <div className = "fill-window">
            <div className = "modalBackground">
                <div className = "modalContainer">
                    <div className = "modalRow">
                        <div className = "modalColLeft">
                            <h1>Cart:</h1>
                        </div>
                        <div className = "modalColRight">
                            <div className = "titleCloseBtn">
                                <Button onClick = {() => closeModal(false)} primary><FaTimes /></Button>
                            </div>
                        </div>
                    </div>    
                    <ItemList/>
                    <Button primary = {false} modal>Checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal
