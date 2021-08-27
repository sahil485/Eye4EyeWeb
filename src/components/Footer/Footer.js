import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    join mailing list to receive updates about new releases 
                </FooterSubHeading>
                <FooterSubText>
                    you can unsubscribe at any time
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder = 'Your email'/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
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
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        <SocialIcon />
                    </SocialLogo>
                    <WebsiteRights>EYE4EYE 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank" aria-label="TikTok">
                            <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterContainer>
    )
}

export default Footer
