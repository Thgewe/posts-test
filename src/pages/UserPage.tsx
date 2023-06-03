import React, {useEffect} from 'react';
import UserInfo from "../components/UserInfo";
import PostsList from "../components/PostsList";
import {Container} from "react-bootstrap";
import {useAppDispatch} from "../hooks/redux";
import {fetchUser} from "../store/reducers/userReducer";
import {useParams} from "react-router-dom";

const UserPage = () => {

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchUser(params.id !== undefined ? params.id : '1'));
    }, [])

    return (
        <Container>
            <UserInfo />
            <PostsList userId={params.id && params.id}/>
        </Container>
    );
};

export default UserPage;