import React, {FC, useEffect} from 'react';
import PostCard from "./PostCard";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchFilteredPostsRequest, fetchUserPostsRequest} from "../store/reducers/postsReducer";
import {Alert, Spinner, Toast, ToastContainer} from "react-bootstrap";

interface IPostListProps {
    userId?: string,
}

const PostsList: FC<IPostListProps> = ({userId}) => {

    const posts = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (posts.posts.length <= 0 && userId === undefined) {
            dispatch(fetchFilteredPostsRequest({
                newPage: posts.currentPage,
                filter: posts.filter,
            }))
        } else if (userId !== undefined) {
            dispatch(fetchUserPostsRequest(userId));
        }
    }, [])

    return (
        <div className={'d-flex align-items-center flex-column'}>
            {
                userId !== undefined && posts.pending
                    ? <Spinner />
                    : posts.errorMsg !== ''
                        ? <Alert variant={'danger'}>{posts.errorMsg}</Alert>
                        : posts.posts.map((post) =>
                    <PostCard
                        key={post.id}
                        id={post.id}
                        userId={post.userId}
                        avatar={''}
                        title={post.title}
                        body={post.body}
                    />
                )
            }
            {
                posts.posts.length <= 0 && posts.errorMsg === ''
                    ? posts.pending
                        ? null
                        : <Alert>Нет постов</Alert>
                    : null
            }
            {
                userId !== undefined
                    ? null
                    : <ToastContainer
                        position={'bottom-start'}
                        className={'position-fixed mb-4 ms-4'}
                    >
                        <Toast
                            show={posts.pending}
                            style={{
                                width: 'fit-content',
                                fontSize: 0,
                                backgroundColor: 'white',
                                boxShadow: 'none',
                            }}
                        >
                            <Spinner className={'m-1'} style={{fontSize: '.75rem'}}/>
                        </Toast>
                    </ToastContainer>
            }
        </div>
    );
};

export default PostsList;