import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import '../styles.css';


function Header(props) {
    let navTheme = props.theme.split('-')[0];
    return(
        <div className={props.theme}>
            
            <Navbar variant={navTheme} className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>Dominic Kenney</Navbar.Brand>

                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/projects">Projects</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;