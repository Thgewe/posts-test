import React from 'react';
import {Alert, Col, Container, Image, Row, Table} from "react-bootstrap";
import {userAvatarImageSrc} from "../utils/constants";
import {useAppSelector} from "../hooks/redux";

const UserInfo = () => {

    const user = useAppSelector(state => state.user);

    return (
        <Container className={'mb-3 pt-3'}>
            {
                user.errorMsg !== ''
                    ? <Alert variant={'danger'}>{user.errorMsg}</Alert>
                    : <Row className={'align-items-center'}>
                    <Col sm={3}>
                        <Image src={userAvatarImageSrc} fluid={true}/>
                    </Col>
                    <Col>
                        <Table>
                            <tbody>
                            <tr>
                                <td>Имя:</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Никнейм:</td>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Город:</td>
                                <td>{user.address.city}</td>
                            </tr>
                            <tr>
                                <td>Улица:</td>
                                <td>{user.address.street}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default UserInfo;