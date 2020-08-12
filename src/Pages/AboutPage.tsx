import React from 'react';

import BodyFill from '../Components/BodyFill';
import {Data,} from '../../global';
import Content from '../Components/Content';

import Self from '../assets/images/Self.jpg';

const AboutPage: React.FC<Data> = (props: Data) => {

    return (
        <div>
            <BodyFill title={props.title} />

            <Content>
                <img src={Self} alt="self" />
                <p>Hello, My name is Dominic. I'm a Dev-Ops engineer with experience in C#, Java, C++, Python and JS.</p>
                <p>My dream is to be able to be able to make custom Hardware and software things to sell at conventions.</p>
                <p>I am constantly trying to challenge myself in new areas and things. Currently I'm working on learning Web development, including React, Django, MongoDB, and Node JS.</p>
                <p>My latest project is a program that will light up items and play a sound when certain notifications show up from an external source.</p>
            </Content>
        </div>
    )
}

export default AboutPage;