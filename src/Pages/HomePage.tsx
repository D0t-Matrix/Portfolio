import React from 'react';

import BodyFill from '../Components/BodyFill';
import {Page} from '../Components/AppProps';

const HomePage: React.FC<Page> = (props: Page) => {

    return (
        <div>
            <BodyFill title={props.pageData.title} subTitle={props.pageData.subTitle} text={props.pageData.text} />
        </div>
    );
}

export default HomePage;