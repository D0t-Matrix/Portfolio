import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

import { FooterProps } from '../../../global';

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <footer className="footer-component">
            <div className="footer-container">
                <div className="brand-container">
                    <Link to="/">
                        {props.brand}
                    </Link>
                </div>
                <div className="footer-center" >
                    TEST
                </div>
                <div className="footer-madeby">
                    Made by: Dominic Kenney
                </div>
            </div>
        </footer>
    );
}

export default Footer;