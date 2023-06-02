import React, {useEffect, useState} from 'react';
import PostCard from "./PostCard";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchPostsRequest} from "../store/reducers/postsReducer";
import {Alert, Spinner} from "react-bootstrap";
import debounce from "../utils/debounce";

const PostsList = () => {

    const posts = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();
    const [isBottom, setIsBottom] = useState<boolean>(false);

    useEffect(() => {
        if (posts.posts.allIds.length <= 0) {
            dispatch(fetchPostsRequest());
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [])

    useEffect(() => {
        if (isBottom) {
            if (posts.isNoMorePosts) {
                return
            }
            dispatch(fetchPostsRequest());
            setIsBottom(false);
        }
    }, [isBottom, posts.posts.allIds])

    const scrollHandler = debounce(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;

        if (scrollTop + window.innerHeight + 100 >= scrollHeight) {
            setIsBottom(true);
        }
    }, 100)

    return (
        <div className={'d-flex align-items-center flex-column'}>
            {
                posts.posts.allIds.map((id) =>
                    <PostCard
                        key={posts.posts.byId[id].id}
                        id={posts.posts.byId[id].id}
                        userId={posts.posts.byId[id].userId}
                        avatar={''}
                        title={posts.posts.byId[id].title}
                        body={posts.posts.byId[id].body}
                    />
                )
            }
            {
                posts.pending
                    ? <Spinner className={'mb-4 mt-4'}/>
                    : null
            }
            {
                posts.isNoMorePosts
                    ? <Alert>Больше нет постов</Alert>
                    : null
            }
        </div>
    );
};

export default PostsList;