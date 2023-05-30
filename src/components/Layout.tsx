import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Layout;