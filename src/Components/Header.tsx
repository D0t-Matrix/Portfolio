import React from 'react';

import { Props, Pages } from './AppProps';

const linkNode = (pages: Pages) => {
    return (pages.map(page => {
        return (
        <NavItem>
            <NavLink href={page.directory}>
                {page.directoryTitle}
            </NavLink>
        </NavItem>);
    }));
}


const Header: React.FC<Props> = (props: Props) => {

    const [isOpen, setOpen] = React.useState(false);

    const toggle = () => setOpen(!isOpen);

    return (
        <div>
            <NavbarScroller brand={props.brand} pages={props.pages} />
        </div>
    );
}

export default Header;

{/* <Navbar color={navThemeStr} light expand="md">
                <NavbarBrand href="/">{props.brand}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {linkNode(props.pages)}
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar> */}