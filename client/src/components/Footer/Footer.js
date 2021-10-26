import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading,  Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './Footer.elements';
import TikTok from '../../images/Svg/tiktok-1.svg';
import Instagram from '../../images/Svg/instagram-2016-6.svg';
import Twitter from '../../images/Svg/twitter-4.svg';
import InvLogo from '../../images/Svg/invLogoSVG.svg';
import axios from 'axios';

const Footer = () => {

    /*const [subEmail, setEmail] = useState("")
    function addEmail(){
        axios.post('/emails', {email: subEmail}).catch(err => console.log(err)).then(console.log("Successfully added email"))
    }*/

    return (
            <FooterContainer>
                
                <FooterSubscription>
                    <FooterSubHeading>
                        Enter your email to receive updates about new clothing releases!
                    </FooterSubHeading>
                    <Form>
                        <FormInput id = 'email' name='email' type='email' placeholder = 'Your email'/>
                        <Button fontBig>Subscribe</Button>
                    </Form>
                </FooterSubscription>

                <SocialMedia>
                    <SocialMediaWrap>   
                        <SocialLogo to ='/'>
                            <img src={InvLogo}/>
                        </SocialLogo>
                        <WebsiteRights>EYE4EYE © 2021</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.instagram.com/eye4eyeofficial/' target="_blank" aria-label="Instagram">
                                <img src={Instagram}/>
                            </SocialIconLink>

                            <SocialIconLink href='https://www.tiktok.com/@eye4eyeofficial' target="_blank" aria-label="Twitter">
                                <img src={TikTok}/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label="TikTok">
                                <img src={Twitter}/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterContainer>
    )
}

export default Footer
