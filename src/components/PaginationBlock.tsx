import React from 'react';
import {getPaginationArray} from "../utils/getPaginationArray";
import {Pagination} from "react-bootstrap";
import {fetchFilteredPostsRequest} from "../store/reducers/postsReducer";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

const PaginationBlock = () => {

    const posts = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    const clickHandler = (e: React.MouseEvent<HTMLUListElement>) => {
        if (e.target instanceof HTMLAnchorElement) {
            dispatch(fetchFilteredPostsRequest({
                newPage: parseInt(e.target.textContent ? e.target.textContent : '1'),
                filter: posts.filter,
            }))
        }
    }

    return (
        <Pagination
            className={'justify-content-center'}
            onClick={(e) => clickHandler(e)}
        >
            {getPaginationArray(posts.totalPages).length <= 1
                ? null
                : getPaginationArray(posts.totalPages).map((num) =>
                <Pagination.Item
                    value={num}
                    active={posts.currentPage === num}
                    key={num}
                >
                    {num}
                </Pagination.Item>
            )}
        </Pagination>
    );
};

export default PaginationBlock;