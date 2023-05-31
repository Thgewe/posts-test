import React, {FC} from 'react';
import cl from './styles/comment.module.css';

interface ICommentProps {
    id: string,
    title: string,
    body: string,
}

const Comment: FC<ICommentProps> = ({id, title, body}) => {
    return (
        <div className={'mb-2 ' + cl.comment}>
            <h5>{title}</h5>
            <p className={'mb-0'}>{body}</p>
        </div>
    );
};

export default Comment;