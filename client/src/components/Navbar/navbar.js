import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } 
from './navbar.elements';
import Logo1 from '../../images/Svg/LogoSVG.svg';

const Navbar = () => {
    //useState is a hook created to create a class-less model
    //useState returns a value and a function to update the value - the parameter is the initial value
    //for example, const [click, setClick] = useState(false) creates a state hook with initial count variable of value false and setClick to update the value using setClick(!false, etc.)
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

//use effect runs after every render- alternative to componentDidMount/Update methods 

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color : '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <img src={Logo1} />
                            EYE4EYE
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>    
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}>

                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/hoodies'>
                                    Hoodies
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/tshirts'>
                                    T-Shirts
                                </NavLinks>
                            </NavItem>
                            
                            <NavItem>
                                <NavLinks to='/'>
                                    About Us
                                </NavLinks>
                            </NavItem>

                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to = '/sign-up'>
                                        <Button primary>Sign Up</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/sign-up'>
                                        <Button fontBig primary>
                                            Sign Up
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar
