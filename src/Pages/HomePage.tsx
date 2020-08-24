import React from 'react';

import BodyFill from '../Components/BodyFill/BodyFill';
import {PageData} from '../../global';

import './HomePage.scss';

const HomePage: React.FC<PageData> = (props: PageData) => {

    return (
        <div className="main-title">
            <BodyFill title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default HomePage;