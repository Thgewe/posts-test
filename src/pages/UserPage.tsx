import React from 'react';
import UserInfo from "../components/UserInfo";
import PostsList from "../components/PostsList";
import {Container} from "react-bootstrap";

const UserPage = () => {
    return (
        <Container>
            <UserInfo />
            <PostsList />
        </Container>
    );
};

export default UserPage;