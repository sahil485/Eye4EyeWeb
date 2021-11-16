import React from 'react'
import './elements.modal.css'
import { Button } from '../../../globalStyles'
import { FaTimes } from 'react-icons/fa'

function Modal({ closeModal }) {

    return (
        <div className = "fill-window">
            <div className = "modalBackground">
                <div className = "modalContainer">
                    <div className = "titleCloseBtn">
                        <Button onClick = {() => closeModal(false)} primary><FaTimes /></Button>
                    </div>
                    <div className = "title"></div>
                        <h1>Are you sure you want to continue</h1>
                    <div className = "body"></div>
                        <p>The next page is awesome</p>
                    <div className = "footer"></div>
                        <Button primary = {false} modal>Continue</Button>
                        <Button primary = {true} onClick = {() => closeModal(false)} modal>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal
