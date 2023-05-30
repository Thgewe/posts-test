import React, {useState} from 'react';
import {Image, Nav, Offcanvas} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, POSTS_ROUTE} from "../utils/constants";
import cl from './styles/header.module.css';
import avatar from '../images/AvatarSkyrim.png';

const Header = () => {

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className={cl.header}>
            <div className={cl.burger} onClick={handleShow}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <div className={'d-flex align-items-center ' + cl.info}>
                        <div className={cl.avatar}>
                            <Image src={avatar} roundedCircle={true} fluid/>
                        </div>
                        <div>
                            <Offcanvas.Title>Виктор</Offcanvas.Title>
                            <Offcanvas.Title>hanhatov@mail.ru</Offcanvas.Title>
                        </div>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <NavLink
                            className={({isActive}) =>
                                isActive ? cl.link + ' ' + cl.active : cl.link }
                            to={ABOUT_ROUTE}
                            onClick={handleClose}
                        >
                            Обо мне
                        </NavLink>
                        <NavLink
                            className={({isActive}) =>
                                isActive ? cl.link + ' ' + cl.active : cl.link }
                            to={POSTS_ROUTE}
                            onClick={handleClose}
                        >
                            Посты
                        </NavLink>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    );
};

export default Header;