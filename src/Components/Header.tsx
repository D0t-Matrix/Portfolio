import React from 'react';
import { Link } from 'react-router-dom';

import { Props, Pages } from './AppProps';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

const linkNode = (pages: Pages) => {
    return (pages.map(page => {
        return (<NavItem><Link className="nav-link" to={page.directory}>{page.directoryTitle}</Link></NavItem>);
    }));
}

const [isOpen, setOpen] = React.useState(false);

const toggle = () => {
    if (isOpen === false)
        setOpen(true);
    else
        setOpen(false);
}

const Header: React.FC<Props> = (props: Props) => {
    let navThemeStr = props.theme.split('-')[0];
    // let navProps: NavbarProps = {
    //     variant: "light",
    // }
    // if (navThemeStr === "dark")
    //     navProps.variant = "dark";



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