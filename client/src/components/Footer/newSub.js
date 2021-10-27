import React, { useState } from 'react'
import { FooterSubscription, FooterSubHeading,  Form, FormInput } from './Footer.elements'
import { Button } from '../../globalStyles'
import axios from 'axios'

const NewSub = () => {

    const [subEmail, setEmail] = useState("")
    const addEmail = () => {
        console.log(subEmail)
        axios.post('http://localhost:5000/emails', {email: subEmail}).catch(err => console.log(err)).then("success")
        setEmail("")
    }

    return (
            <>
                <FooterSubscription>
                    <FooterSubHeading>
                        Enter your email to receive updates about new clothing releases!
                    </FooterSubHeading>
                    <Form>
                        <FormInput id = 'email' value = {subEmail} name='email' type='email' placeholder = 'Your email' onChange={e => setEmail(e.target.value)}/>
                        <Button fontBig onClick={addEmail}>Subscribe</Button>
                    </Form>
                </FooterSubscription>
            </>
    )
}

export default NewSub

