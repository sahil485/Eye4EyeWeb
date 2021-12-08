import React, { useState } from 'react'
import { FooterSubscription, FooterSubHeading,  Form, FormInput } from './Footer.elements'
import { Button } from '../../globalStyles'
import axios from 'axios'

const NewSub = () => {

    const [subEmail, setEmail] = useState("")

    async function addEmail(event){
        event.preventDefault();
        var getRes = await axios.post(process.env.POST, {email: subEmail}).then(function(res){
            return res.data.number
        }).catch(err => console.log(err));
        if(getRes == 1)
        {
            alert("Email successfully added to mailing list!")
        }
        else{
            alert("Your email is already on the mailing list!")
        }
        setEmail("")
    }

    return (
            <>
                <FooterSubscription>
                    <FooterSubHeading>
                        Enter your email to receive updates about new clothing releases!
                    </FooterSubHeading>
                    <Form>
                        <FormInput id = 'email' autocomplete = "off" value = {subEmail} name='email' type='email' placeholder = 'Your email' onChange={e => setEmail(e.target.value)}/>
                        <Button fontBig onClick={addEmail}>Subscribe</Button>
                    </Form>
                </FooterSubscription>
            </>
    )
}

export default NewSub

