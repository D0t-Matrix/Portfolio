import React from 'react';

import BodyFill from '../Components/BodyFill';
import {PageData} from '../Components/AppProps';

const HomePage: React.FC<PageData> = (props: PageData) => {

    return (
        <div>
            <BodyFill title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default HomePage;