import React from 'react';
import Hero from '../Components/Hero';

function HomePage(props) {
    
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            TESTSETISDJFLKSDJF
        </div>
    );
}

export default HomePage;