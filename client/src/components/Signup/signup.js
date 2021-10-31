import React, { useState } from 'react'
import Modal from './Modal/modal'
import { Button } from '../../globalStyles'


function SignUp() {

    
    const [openModal, setOpenModal] = useState(false)

    const makeFullScreen = () => {
        setOpenModal(true)

    }

    return (
        <>
            <h1>Click to open modal</h1>
            <Button onClick={() => setOpenModal(true)}>Open modal</Button>
            {openModal && <Modal closeModal = {setOpenModal}/>}
      </>
    )
}

export default SignUp

