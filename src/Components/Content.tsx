import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Content: React.FC = (props) => {
    
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Content;