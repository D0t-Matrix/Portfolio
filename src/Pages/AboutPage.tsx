import React from 'react';

import BodyFill from '../Components/BodyFill/BodyFill';
import { PageData } from '../../global';
import Content from '../Components/Content';

import './AboutPage.scss';

import Self from '../assets/images/Self.jpg';

const AboutPage: React.FC<PageData> = (props: PageData) => {

    return (
        <div>
            <BodyFill title={props.title} />

            <Content>
                <img src={Self} className="about-image" alt="self" />
                <div className="about-text">

                    <p>Hello, My name is Dominic. I'm a Dev-Ops engineer with experience in C#, Java, C++, Python and JS. <br />
                    My dream is to be able to be able to make custom Hardware and software things to sell at conventions. <br />
                    I am constantly trying to challenge myself in new areas and things. Currently I'm working on learning Web development, including React, Django, MongoDB, and Node JS. <br />
                    My latest project is a program that will light up items and play a sound when certain notifications show up from an external source.</p>
                </div>
            </Content>
        </div>
    )
}

export default AboutPage;