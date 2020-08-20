import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Props, Pages, Page } from '../../../global';
import './Header.scss';
import { MenuIcon } from '../Icons/MenuIcon/MenuIcon';
import { CloseIcon } from '../Icons/CloseIcon/CloseIcon';

// const linkNode = (pages: Pages) => {
//     return (pages.map(page => {
//         return (
//         <NavItem>
//             <NavLink href={page.directory}>
//                 {page.directoryTitle}
//             </NavLink>
//         </NavItem>);
//     }));
// }


// const Header: React.FC<Props> = (props: Props) => {

//     const [isOpen, setOpen] = React.useState(false);

//     const toggle = () => setOpen(!isOpen);

//     return (
//         <div>
//             <NavbarScroller brand={props.brand} pages={props.pages} />
//         </div>
//     );
// }
{/* <Header title={title} brand={brand} pages={pages} theme={darkMode ? "dark-mode" : "light-mode"} /> */}

const Header: React.FC<Props> = (props) => {
    const headerElement = useRef<HTMLElement>(null);

    const HeaderLink = (page: Page, i: number): JSX.Element => {
        return (
            <li key={i}>
                <Link to={page.directory} onClick={closeMenu}>
                    {page.directoryTitle}
                </Link>
            </li>
        );
    }

    const HeaderLinks = (): JSX.Element => {
        return (
            <ul className="links-container">
                {props.pages.map((link, i) => HeaderLink(link, i))}
                <button onClick={closeMenu} className="close-button" role="button" aria-label="Close mobile menu">
                    <CloseIcon/>
                </button>
            </ul>
        );
    }

    const openMobileMenu = (): void => {
        if (headerElement.current) {
            headerElement.current.classList.toggle('is-menu-open');
        } 
    }

    const closeMenu = (): void => {
        if (headerElement.current) {
            headerElement.current.classList.remove('is-menu-open');
        } 
    }

    return (
        <header className='header-component' ref={headerElement}>
            <div className="header-container">
                <div className="logo-container">
                    <Link to='/'>
                        {props.brand}
                    </Link>
                </div>
                <HeaderLinks/>
                <div onClick={closeMenu} className="backdrop"></div>
                <button onClick={openMobileMenu} className="hambuger-menu-button" role="button" aria-label="Open mobile menu">
                    <MenuIcon/>
                </button>
            </div>
        </header>
    );
}

export default Header;