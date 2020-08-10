import React from 'react';
import {Navbar, Nav, NavbarProps} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {Props, Pages, Page} from './AppProps';

const linkNode = (pages: Pages) => {
    return (pages.map(page => {
        return (<Link className="nav-link" to={page.directory}>{page.directoryTitle}</Link>);
    }));
}

const Header: React.FC<Props> = (props: Props) => {
    let navThemeStr = props.theme.split('-')[0];
    let navProps: NavbarProps = {
        variant: "light",
    }
    if (navThemeStr === "dark")
        navProps.variant = "dark";

    

    return (
        <div className={props.theme}>
            <Navbar variant={navProps.variant} className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>{props.brand}</Navbar.Brand>

                <Navbar.Toggle className='border-0' aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        {linkNode(props.pages)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;