import React, {FC, useState} from 'react';
import {Button, Spinner} from "react-bootstrap";
import {IComments} from "../types/comment-types";
import Comment from "./Comment";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchCommentsRequest} from "../store/reducers/commentsReducer";

interface ICommentsListProps {
    postId: string,
}

const CommentsList: FC<ICommentsListProps> = ({postId}) => {

    const [show, setShow] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const comments = useAppSelector<IComments>(
        state => state.comments.byPostId[postId]
    );

    const clickHandler = () => {
        if (comments === undefined) {
            dispatch(fetchCommentsRequest(postId));
        }
        setShow(!show);
    }

    return (
        <div>
            {
                show ?
                    <>
                        {comments.pending
                            ? <Spinner className={'d-block mb-2'}/>
                            : comments.comments.map((comment) =>
                                <Comment
                                    key={comment.id}
                                    id={comment.id}
                                    title={comment.email}
                                    body={comment.body}
                                />)
                        }
                        {comments.errorMsg
                            ? <div>{comments.errorMsg}</div>
                            : null
                        }
                    </>
                    : null
            }
            <Button onClick={clickHandler}>{show ? 'Скрыть' : 'Комментарии'}</Button>
        </div>
    );
};

export default CommentsList;