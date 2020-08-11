import React from 'react';

import { Props, Pages } from './AppProps';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const linkNode = (pages: Pages) => {
    return (pages.map(page => {
        return (<NavItem><NavLink className="nav-link" href={page.directory}>{page.directoryTitle}</NavLink></NavItem>);
    }));
}


const Header: React.FC<Props> = (props: Props) => {
    let navThemeStr = props.theme.split('-')[0];

    const [isOpen, setOpen] = React.useState(false);

    const toggle = () => {
        if (isOpen === false)
            setOpen(true);
        else
            setOpen(false);
    }

    return (
        <div>
            <Navbar color={navThemeStr} expand="md">
                <NavbarBrand href="/">{props.brand}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen.valueOf()} navbar>
                    <Nav className="ml-auto" navbar>
                        {linkNode(props.pages)}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;