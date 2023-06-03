import React, {useEffect} from 'react';
import UserInfo from "../components/UserInfo";
import PostsList from "../components/PostsList";
import {Button, Container} from "react-bootstrap";
import {useAppDispatch} from "../hooks/redux";
import {fetchUser} from "../store/reducers/userReducer";
import {useNavigate, useParams} from "react-router-dom";

const UserPage = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUser(params.id !== undefined ? params.id : '1'));
    }, [])

    return (
        <Container>
            <UserInfo />
            <PostsList userId={params.id && params.id}/>
            <Button
                className={'position-fixed fixed-bottom ms-auto me-2 mb-2'}
                variant={'warning'}
                style={{
                    width: 'fit-content',
                }}
                onClick={() => navigate(-1)}
            >
                Назад
            </Button>
        </Container>
    );
};

export default UserPage;