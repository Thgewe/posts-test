import React from 'react';
import {IPost} from "../types/post-types";
import PostCard from "./PostCard";

const PostsList = () => {

    const posts: IPost[] = [
        {
            id: '1',
            userId: '1',
            title: 'Первый',
            body: 'Тело первого',
        },
        {
            id: '2',
            userId: '2',
            title: 'Второй Второй',
            body: 'Тело второго Тело второго Тело второго Тело второго Тело второго Тело второго Тело второго Тело второго',
        },
        {
            id: '3',
            userId: '3',
            title: 'Третий Третий Третий Третий',
            body: 'Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего Тело третьего',
        },
    ];

    return (
        <div className={'d-flex align-items-center flex-column'}>
            <>
                {
                    posts.map((post) =>
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
            </>
        </div>
    );
};

export default PostsList;