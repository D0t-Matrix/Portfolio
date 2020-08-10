import React from 'react';
import { Carousel } from 'react-bootstrap';

function CardInfo(props) {

    return(
        <Carousel.Caption>
        <h3 className="d-card-title">
            {props.title}
        </h3>
        <p className="d-card-subtitle">
            {props.subTitle}
        </p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">View My Code</a>
    </Carousel.Caption>
    );
}

export default CardInfo;