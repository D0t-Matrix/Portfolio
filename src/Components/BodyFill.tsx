import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

import { Data } from '../../global';

const BodyFill: React.FC<Data> = (props: Data) => {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-md-center py-5">
                    <Col md={12} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                        {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default BodyFill;