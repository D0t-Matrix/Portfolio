import React from 'react';

import BodyFill from '../Components/BodyFill/BodyFill';
import { PageData } from '../../global';

const ProjectsPage: React.FC<PageData> = (props: PageData) => {

    return (
        <div>
            <BodyFill title={props.title} subTitle={props.subTitle} text={props.text} />

        </div>
    )
}

export default ProjectsPage;