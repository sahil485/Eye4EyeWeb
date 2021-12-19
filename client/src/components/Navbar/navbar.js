import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { AppContext } from '../../Context';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } 
from './navbar.elements';
import Logo1 from '../../images/Svg/LogoSVG.svg';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleResize = () => {
        setClick(false);
    }

    window.addEventListener('resize', handleResize);

    return (
        <>
                <IconContext.Provider value={{color : 'black'}}>
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
                                    <NavLinks to='/Hoodies'>
                                        Hoodies
                                    </NavLinks>
                                </NavItem>

                                <NavItem>
                                    <NavLinks to='/Cart'>
                                        <FaShoppingCart/>
                                    </NavLinks>
                                </NavItem>
                            </NavMenu>

                        </NavbarContainer>
                    </Nav>
                </IconContext.Provider>
        </>
    );
};

export default Navbar
