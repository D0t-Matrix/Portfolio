import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

import Card from './Card';

import backgroundChanger from '../assets/images/Background-changer.png';
import GyroScope from '../assets/images/Gyro-Scope.png';
import Twitch_PubSub from '../assets/images/Twitch_PubSub.png';

let items = [
    {
        id: 0,
        title: 'Background Changer',
        subTitle: 'Changes Background every time program runs',
        imgSrc: backgroundChanger,
        link: 'https://github.com/D0t-Matrix/console-background-changer',
    },
    {
        id: 1,
        title: 'Gyro-Scope',
        subTitle: 'R-Pi car from controller Accelerometer',
        imgSrc: GyroScope,
        link: 'https://github.com/D0t-Matrix/Gyro-Scope',
    },
    {
        id: 2,
        title: 'Twitch_PubSub_IoT',
        subTitle: 'Twitch Event subscriber for IoT integration',
        imgSrc: Twitch_PubSub,
        link: 'https://github.com/D0t-Matrix/Twitch_PubSub_Notifier',
    }
];

function makeItems() {
    return items.map(item => {
        return (<Card item={item} key={item.id} />);
    });
}



function ControlledCarousel() {

    return (
        <Container className="d-carousel">
            <Carousel>
                {makeItems()}
            </Carousel>
        </Container>
    )
}


export default ControlledCarousel;