import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from './Card';

import backgroundChanger from '../assets/images/Background-changer.png';
import GyroScope from '../assets/images/Gyro-Scope.png';
import Twitch_PubSub from '../assets/images/Twitch_PubSub.png';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'Background Changer',
                    subTitle: 'Changes Background every time program runs',
                    imgSrc: backgroundChanger,
                    link: 'https://github.com/D0t-Matrix/console-background-changer',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Gyro-Scope',
                    subTitle: 'R-Pi car from controller Accelerometer',
                    imgSrc: GyroScope,
                    link: 'https://github.com/D0t-Matrix/Gyro-Scope',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Twitch_PubSub_IoT',
                    subTitle: 'Twitch Event subscriber for IoT integration',
                    imgSrc: Twitch_PubSub,
                    link: 'https://github.com/D0t-Matrix/Twitch_PubSub_Notifier',
                    selected: false
                }

            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id)
                item.selected = false;
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    };
}

export default Carousel;