import React from 'react';
import {Col, Container, Image, Row, Table} from "react-bootstrap";
import {IUser} from "../types/user-types";
import {userAvatarImageSrc} from "../utils/constants";

const UserInfo = () => {

    const user: IUser = {
        id: '1',
        name: 'Viktor',
        username: 'Thgewe',
        email: 'hanhatov@mail.ru',
        address: {
           street: 'Lenina',
           city: 'Ulan-Ude',
        }
    }

    return (
        <Container className={'mb-3'}>
            <Row className={'align-items-center'}>
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
        </Container>
    );
};

export default UserInfo;