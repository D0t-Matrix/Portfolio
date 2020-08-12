import React from 'react';

import BodyFill from '../Components/BodyFill';
import { Data } from '../../global';

const ProjectsPage: React.FC<Data> = (props: Data) => {

    return (
        <div>
            <BodyFill title={props.title} subTitle={props.subTitle} text={props.text} />
            
        </div>
    )
}

export default ProjectsPage;