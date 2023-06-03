import React from 'react';
import PostsList from "../components/PostsList";
import PaginationBlock from "../components/PaginationBlock";
import SearchFilter from "../components/SearchFilter";

const PostsPage = () => {
    return (
        <>
            <SearchFilter />
            <PostsList />
            <PaginationBlock />
        </>
    );
};

export default PostsPage;