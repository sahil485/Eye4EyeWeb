import React from 'react';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading,  Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './Footer.elements';
import TikTok from '../../images/Svg/tiktok-1.svg';
import Instagram from '../../images/Svg/instagram-2016-6.svg';
import Twitter from '../../images/Svg/twitter-4.svg';
import InvLogo from '../../images/Svg/invLogoSVG.svg';

const Footer = () => {

    return (
            <FooterContainer>
                {/*<FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signup'>Origins</FooterLink>
                            <FooterLink to='/signup'>Locations</FooterLink>
                            <FooterLink to='/signup'>Testimonials</FooterLink>
                        </FooterLinksItems>
                
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signup'>Origins</FooterLink>
                            <FooterLink to='/signup'>Locations</FooterLink>
                            <FooterLink to='/signup'>Testimonials</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinkTitle>Follow Us</FooterLinkTitle>
                            <FooterLink to='/signup'>Origins</FooterLink>
                            <FooterLink to='/signup'>Locations</FooterLink>
                            <FooterLink to='/signup'>Testimonials</FooterLink>
                        </FooterLinksItems>


                    </FooterLinksWrapper>
                    </FooterLinksContainer>*/}
                <FooterSubscription>
                    <FooterSubHeading>
                        Enter your email to join mailing our list to receive updates about new clothing releases
                    </FooterSubHeading>
                    {/*<FooterSubText>
                        you can unsubscribe at any time
                    </FooterSubText>*/}
                    <Form>
                        <FormInput id = 'email' name='email' type='email' placeholder = 'Your email' require/>
                        <Button fontBig onClick = {() => {console.log(document.getElementById('email').value)}}>Subscribe</Button>
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
