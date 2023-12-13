import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../../components/Logo';

import Basic from '../../literal-sauce-drip/ContactPortal/BasicContact';
import Social from '../../literal-sauce-drip/ContactPortal/SocilaContact'
import CrossSiteNav from '../../literal-sauce-drip/CrossSiteNav/CrossSiteNav';

import * as S from './Header.styles';

export default function Header() {
    const [isMenuFocused, setIsMenuFocused] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 700)
        };

        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize',handleResize);
        }
    }, []);

    const handelMenuClick = () => {
        setIsMenuFocused((prev) => !prev);
    }

    const handleHome = () => {
        setIsMenuFocused(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <S.Header
        id='site-header'
        className={`${isHome ? 'home' : 'project'} ${isMenuFocused ? 'open' : 'close'}`}
        >
            <S.NavItem
                id='logo'
                onClick={handleHome}>
                    <Logo />
            </S.NavItem>
            <S.MenuToggle
                type="button"
                onClick={handelMenuClick}
                className={`menu-toggle ${isMenuFocused ? 'x' : ''}`}
            />
            <S.ContactMenu id='contact-menu' className={isMenuFocused ? 'open shadow' : ''}>
                <CrossSiteNav />
                <Basic />
                <Social />
            </S.ContactMenu>
        </S.Header>
    );
}