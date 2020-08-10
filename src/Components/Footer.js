import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.modules.css';

function footer() {

    return (
        <div>
            <footer className="mt-5 footer">
                <Container className="footer-Container" fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0" md={3} sm={12}>
                            Dominic Kenney
                    </Col>
                        <Col className="p-0 d-flex justify-content-end" md={3}>
                            This site was made by: Dominic Kenney
                    </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default footer;