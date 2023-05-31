import React, {FC, useState} from 'react';
import {Button} from "react-bootstrap";
import {IComment} from "../types/comment-types";
import Comment from "./Comment";

interface ICommentsListProps {
    postId: string,
}

const CommentsList: FC<ICommentsListProps> = ({postId}) => {

    const [show, setShow] = useState<boolean>(false);

    const comments: IComment[] = [
        {
            postId: postId,
            id: '1',
            title: 'hanhatov@mail.ru',
            body: 'Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.'
        },
        {
            postId: postId,
            id: '2',
            title: 'gus.s@outlook.com',
            body: 'Because of this, the recommended approach to managing relational or nested data in a Redux store is to treat a portion of your store as if it were a database, and keep that data in a normalized form.'
        },
        {
            postId: postId,
            id: '3',
            title: 'mythandroid@outlook.com',
            body: 'When using display: grid, you can make use of gap utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a display: grid container). Gap utilities are responsive by default, and are generated via our utilities API, based on the $spacers Sass map.'
        },
    ]

    const clickHandler = () => {
        setShow(!show);
    }

    return (
        <div>
            {
                show ?
                    <>
                        {comments.map((comment) =>
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                title={comment.title}
                                body={comment.body}
                            />
                        )}
                    </>
                    : null
            }
            <Button onClick={clickHandler}>{show ? 'Скрыть' : 'Комментарии'}</Button>
        </div>
    );
};

export default CommentsList;