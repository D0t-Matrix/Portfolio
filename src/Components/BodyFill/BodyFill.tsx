import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

import { PageData } from '../../../global';

import './BodyFill.scss';

const BodyFill: React.FC<PageData> = (props: PageData) => {
    return (
        <Jumbotron className="jumbotron">
            <Container fluid={true}>
                <Row className="justify-content-md-center py-5">
                    <Col md={12} sm={12}>
                        {props.title && <h1 className="title">{props.title}</h1>}
                        {props.subTitle && <h3 className="subtitle">{props.subTitle}</h3>}
                        {props.text && <h3 className="text">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default BodyFill;