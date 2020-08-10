import React from 'react';
import {Carousel} from 'react-bootstrap';

import CardInfo from './CardInfo';

function Card(props) {
    console.log(props.item);
    return (
        <Carousel.Item>
            <img className="d-card-img" src={props.item.imgSrc} alt={props.item.title} />
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
        </Carousel.Item>
    );
}


export default Card;